import { invoke } from "@tauri-apps/api";
import { drawTree, getToggledElements } from "./draw"

const $ = document.querySelector.bind(document);
let treeDrawn = false;

document.addEventListener("DOMContentLoaded", async function () {
    const beginElement = $("demo-button")! as HTMLElement;
    const demo = $("div.demo")! as HTMLElement;
    demo.classList.add("hidden");

    beginElement.addEventListener("pointerup", async function () {
        const begin = await invoke("demo_start") as boolean;
        if (begin) {
            demo.classList.remove("hidden");
            beginElement.classList.add("hidden");
            treeDrawn = await drawTree([]);
        }
    })
})

async function resize() {
    if (!treeDrawn) return;
    const demo = $("div.demo")! as HTMLElement;
    demo.innerHTML = "";
    await drawTree(getToggledElements());
    
}

let timeout: any;

window.onresize = function() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        resize();
    }, 250);
  };