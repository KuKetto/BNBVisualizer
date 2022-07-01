import * as d3 from 'd3';
import testData from './data.json';
import { viewboxEventInit } from './viewbox_mouseevent';

let root: d3.HierarchyPointNode<HierarchyDatum>;

//strict interface d3-hierarchy library uses 
interface HierarchyDatum {
    name: string;
    value: number;
    children?: Array<HierarchyDatum>;
    comment?: string;
}

function toggle(d: any) {
    if (d.children) {
        d._children = d.children;
        d.children = null;
    } else {
        d.children = d._children;
        d._children = null;
    }
}

function toggleAll(d: any) {
    if (d.children) {
      d.children.forEach(toggleAll);
      toggle(d);
    }
}

function toggleAllPrev(array: string[], rootPoint: any) {
    rootPoint._children.forEach((current: any) => {
        if (current._children) toggleAllPrev(array, current);
        if (array.findIndex((element) => current.data.name === element) > -1) toggle(current);
    })
}

export function getToggledElements() {
    const isToggledArray: string[] = [];
    if (root.children) {
        root.descendants().forEach((current: any) => {
            if (!current.children && !current._children) isToggledArray.push(current.data.name);
            else if (!current._children) isToggledArray.push(current.data.name);
        });
        
    }
    return isToggledArray;
}

export async function drawTree(toggled: string[]): Promise<boolean> {
    const margin: any = { top: 20, right: 120, bottom: 20, left: 120 };

    const width = window.outerWidth - margin.right - margin.left;
    const height = window.outerHeight - margin.top - margin.bottom;
    let i = 0;

    const treeLayout: d3.TreeLayout<HierarchyDatum> = d3.tree<HierarchyDatum>()
        .nodeSize([70, 40])

    const vis = d3.select(".demo").append("svg:svg")
        .attr("id", "svgTree")
        .attr("width", width + margin.right + margin.left)
        .attr("height", height + margin.top + margin.bottom)
        .append("svg:g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    viewboxEventInit();

    var tooltip = d3.select(".demo").append("div")
        .attr("class", "tooltip")                
        .style("opacity", 0);    

    root = treeLayout(d3.hierarchy<HierarchyDatum>(testData));
    root.x = height / 2;
    root.y = 0;

    root.children?.forEach(toggleAll);
    toggle(root);

    if (toggled.length > 0) {
        toggleAllPrev(toggled, root);
        toggle(root);
    }

    update(root);

    function update(point: d3.HierarchyPointNode<HierarchyDatum>) {
        const nodes = d3.reverse(root.descendants());
        nodes.forEach(function(d) { d.y = d.depth * 180; });
        var node = vis.selectAll("g.node")
            .data(nodes, function(d:any) { return d.id || (d.id = ++i); });

        var nodeEnter = node.enter().append("svg:g")
            .attr("class", "node")
            .attr("transform", function(d) {
                //if node is root
                if (d.parent === null) return "translate(" + d.y + "," + d.x + ")";
                //else 
                return "translate(" + point.y + "," + point.x + ")"; 
            })
            .on("click", function (event, d) {
                toggle(d);
                update(d);
            });
        
        nodeEnter.append("svg:circle")
            .attr("r", 6)
            .style("fill", function(d: any) { return d._children ? "lightsteelblue" : "#fff"; });

        nodeEnter.append("svg:text")
            .attr("x", function(d: any) { return d.children || d._children ? -10 : 10; })
            .attr("dy", "0.4em")
            .attr("text-anchor", function(d: any) { return d.children || d._children ? "end" : "start"; })
            .text(function(d) { return d.data.name; })
            .on("mouseover", function(event, d) {        
                const tooltip_text = `<span class="bold">Node name:</span> ${d.data.name}<br>
                <span class="bold">Node ${d.data.value === 0 ? 'is infeasible!</span>' : 'has a value of</span> ' + d.data.value}
                ${d.data.comment ? '<br><br><span class="bold">Comment:</span><br>' + d.data.comment : ''}`;
                tooltip.transition()        
                    .duration(200)        
                    .style("opacity", .9);        
                tooltip.html(tooltip_text)    
                    .style("left", (event.pageX) + "px")		
                    .style("top", (event.pageY - 50) + "px");
            })
            .on("mouseout", function(d) {        
                tooltip.transition()        
                    .duration(500)        
                    .style("opacity", 0);    
            });  
        
        var nodeUpdate = nodeEnter.transition()
            .duration(500)
            .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

        nodeUpdate.select("circle")
            .attr("r", 6)
            .style("fill", function(d: any) { return d._children ? "lightsteelblue" : "#fff"; });

        nodeUpdate.select("text")
            .style("fill-opacity", 1);

        const nodeExit = node.exit().transition()
            .duration(500)
            .attr("transform", function(d) { return "translate(" + point.y + "," + point.x + ")"; })
            .remove();

        nodeExit.select("circle")
        .attr("r", 6);

        nodeExit.select("text")
        .style("fill-opacity", 6);

        const link = vis.selectAll("path.link")
            .data(root.links(), function(d: any) { return d.target.id; });

        const diagonal = d3.linkHorizontal()
            .x(function(d: [number, number]) {
                return d[1];
            })
            .y(function(d: [number, number]) {
                return d[0];
            });

        link.enter().insert("svg:path", "g")
            .attr("class", "link")
            .attr("d", function(d) {
                const o: [number, number] = [point.x, point.y];
                return diagonal({source: o, target: o});
            })
            .transition()
            .duration(500)
            .attr("d", function(d) {
                const src: [number, number] = [d.source.x, d.source.y];
                const tgt: [number, number] = [d.target.x, d.target.y];
                return diagonal({source: src, target: tgt});
            });

        link.transition()
            .duration(500)
            .attr("d", function(d) {
                const src: [number, number] = [d.source.x, d.source.y];
                const tgt: [number, number] = [d.target.x, d.target.y];
                return diagonal({source: src, target: tgt});
            });

        link.exit().transition()
            .duration(500)
            .attr("d", function(d) {
                //
                const o: [number, number] = [point.x, point.y];
                return diagonal({source: o, target: o});
            })
            .remove();

        nodes.forEach(function(d: any) {
            d.x0 = d.x;
            d.y0 = d.y;
        });
    }

    return true;
}