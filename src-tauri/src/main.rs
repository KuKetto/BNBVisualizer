#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::{CustomMenuItem, Menu, Submenu};
use std::{fs::File, io::BufReader, io::prelude::*};
use chrono;
use serde::{Deserialize, Serialize};

fn main() {
  let quit = CustomMenuItem::new("quit".to_string(), "Quit");
  let open = CustomMenuItem::new("open".to_string(), "Open");
  let submenu = Submenu::new("File", Menu::new().add_item(open).add_item(quit));
  let menu = Menu::new()
    .add_submenu(submenu);
    
  let context = tauri::generate_context!();
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![demo_start, parse_selected_file])
    .menu(menu)
    .on_menu_event(|event| {
      match event.menu_item_id() {
        "open" => {
          let _result = event.window().emit("open", "opened");
        }
        "quit" => {
          std::process::exit(0);
        }
        _ => {}
      }
    })  
    .run(context)
    .expect("error while running tauri application");
}

#[tauri::command]
fn demo_start() -> bool {
  true
}

#[derive(Serialize, Deserialize)]
struct StepCommentsAdded {
  step: usize,
  comments_added: usize
}

#[derive(Serialize, Deserialize)]
struct StepNodeTypeUpdated {
  step: usize,
  node_type_updated: usize
}

#[derive(Serialize, Deserialize)]
struct DecisionAdded {
  step: usize,
  decision_added: usize
}

#[derive(Serialize, Deserialize)]
struct Node {
  name: String,
  step_node_entered: usize,
  value: f64,
  step_node_value_decided: usize,
  node_type: Vec<String>,
  steps_node_type_updated: Vec<StepNodeTypeUpdated>,
  comments: Vec<String>,
  steps_comments_added: Vec<StepCommentsAdded>,
  decisions: Vec<String>,
  steps_decision_added: Vec<DecisionAdded>,
  childrens: Vec<Node>
}

#[tauri::command]
fn parse_selected_file(file_path: String) -> bool {

  let mut file = File::open(file_path).expect("File can't be opened");

  let buf_reader = BufReader::new(file);

  let mut output_file_name = String::new();
  let mut tree_step_by_step: Node = Node{
    name: "null".to_string(),
    step_node_entered: 0,
    value: 0.0,
    step_node_value_decided: 0,
    node_type: Vec::new(),
    steps_node_type_updated: Vec::new(),
    comments: Vec::new(),
    steps_comments_added: Vec::new(),
    decisions: Vec::new(),
    steps_decision_added: Vec::new(),
    childrens: Vec::new()
  };
  let mut step: usize = 1;

  let mut line_test: usize = 0;
  //read part
  for current_line in buf_reader.lines() {
    if let Ok(line) = current_line {
      let line_content: Vec<&str> = line.split_whitespace().collect();
      //line_content[0] = TAG
      //line_content[1] = root
      //check what to do next by the TAG of line
      if line_content[0] == "NODE_CHILD" {

        let node: &mut Node = find_node_inside_tree_step(&mut tree_step_by_step, line_content[3].replace("\"", ""));
        node.childrens.push(Node{
          name: line_content[1].replace("\"", ""),
          step_node_entered: step,
          value: 0.0,
          step_node_value_decided: 0,
          node_type: Vec::new(),
          steps_node_type_updated: Vec::new(),
          comments: Vec::new(),
          steps_comments_added: Vec::new(),
          decisions: Vec::new(),
          steps_decision_added: Vec::new(),
          childrens: Vec::new() 
        });

        if line_content.len() > 4 {
          node.decisions.push(parse_message(line_content, 4));
          node.steps_decision_added.push(DecisionAdded{
            step: step,
            decision_added: node.decisions.len()-1
          })
        }

      } else if line_content[0] == "COMMENT" {

        let node_name_to_look_up = line_content[1].replace("\"", "");
        if node_name_to_look_up.len() >= 1 && node_name_to_look_up != "NEXT"
        {
          let node: &mut Node = find_node_inside_tree_step(&mut tree_step_by_step, node_name_to_look_up);
          node.comments.push(parse_message(line_content, 1));
          node.steps_comments_added.push(StepCommentsAdded{
            step: step,
            comments_added: node.comments.len()-1
          })
        }  

      } else if line_content[0] == "NODE_TYPE" {

        let node: &mut Node = find_node_inside_tree_step(&mut tree_step_by_step, line_content[1].replace("\"", ""));
        node.node_type.push(parse_message(line_content, 1));
        node.steps_node_type_updated.push(StepNodeTypeUpdated{
          step: step,
          node_type_updated: node.node_type.len()-1
        })

      } else if line_content[0] == "OBJ_VALUE" {

        let node: &mut Node = find_node_inside_tree_step(&mut tree_step_by_step, line_content[1].replace("\"", ""));
        node.value = line_content[2].replace("\"", "").parse().unwrap();
        node.step_node_value_decided = step;

      } else if line_content[0] == "DECISION" {

        let node: &mut Node = find_node_inside_tree_step(&mut tree_step_by_step, line_content[1].replace("\"", ""));
        node.decisions.push(parse_message(line_content, 1));
        node.steps_decision_added.push(DecisionAdded{
          step: step,
          decision_added: node.decisions.len()-1
        });
        step += 1;

      } else if line_content[0] == "NODE_ROOT" {
        
        tree_step_by_step = Node{
          name: line_content[1].replace("\"", ""),
          step_node_entered: step,
          value: 0.0,
          step_node_value_decided: 0,
          node_type: Vec::new(),
          steps_node_type_updated: Vec::new(),
          comments: Vec::new(),
          steps_comments_added: Vec::new(),
          decisions: Vec::new(),
          steps_decision_added: Vec::new(),
          childrens: Vec::new() 
        };

      } else if line_content[0] == "MODEL_NAME" {
        
        let model_name = line_content[1].replace("\"", "");
        let file_path: Vec<&str> = model_name.split("/").collect();
        output_file_name = file_path[file_path.len()-1].to_string();
      
      } 

      println!("Current line is: {}", line_test);
      line_test += 1;
    }
  }

  //parse part
  let parsed_json = serde_json::to_string(&tree_step_by_step).expect("Error during output parsing");
  //write part
  file = File::create(format!(
    "{}_{}.json", output_file_name, chrono::offset::Local::now().to_string()[..19].replace(" ", "_")
  )).expect("Can't create this file");
  file.write_all(parsed_json.as_bytes()).expect("Error during writing the output");
  return true;
}

fn parse_message(words: Vec<&str>, critical_index: usize) -> String {
  let mut msg: String = String::new();
  let mut word_index = 0;
  for word in words {
    if word_index > critical_index {
      msg = format!("{} {}", msg, word);
    }
    word_index += 1;
  }
  return msg.replace("\"", "");
}

fn find_node_inside_tree_step<'a>(starting_node: &'a mut Node, node_name_to_find: String) -> &'a mut Node {
  
  let mut node_found = false;
  let node_name_vector: Vec<&str> = node_name_to_find.split("_").collect();

  fn find_node<'a>(node: &'a mut Node, node_name_vector: Vec<&str>, node_found: &mut bool) -> &'a mut Node {
    //if node.childrens.len() == 0 {return node;}
    let mut max_regex: usize = 0;
    let mut max_regex_node_it = 0;
    let mut child_it: usize = 0;
    for child in node.childrens.iter() {
      if *node_found {break;}
      let this_node_name_vector: Vec<&str> = child.name.split("_").collect();
      let mut this_regex_count: usize = 0;
      let mut i: usize = 0;
      for character in node_name_vector.iter() {
          if i >= this_node_name_vector.len() {break;}
          if character.to_string() == this_node_name_vector[i].to_string() {
            i += 1;
            this_regex_count += 1;
            if this_regex_count > max_regex {
              max_regex = this_regex_count;
              max_regex_node_it = child_it;
            }
          } else {
              break;
          }
      }
      if this_regex_count == node_name_vector.len() {
        *node_found = true;
        return &mut node.childrens[child_it];
      }
      child_it += 1;
    }
    return find_node(&mut node.childrens[max_regex_node_it], node_name_vector, node_found);
  }
  if starting_node.name == node_name_to_find {
    return starting_node;
  } 
  return find_node(starting_node, node_name_vector, &mut node_found);
}