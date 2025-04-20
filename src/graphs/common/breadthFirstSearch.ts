import { AdjacencyList, Node } from "../graphs.types";

export const breadthFirstSearch = (graph: AdjacencyList, start: Node) => {
    if(Object.entries(graph).length === 0) return [];
    const processed: Node[] = [];
    const queue = [start];
    while(queue.length > 0){
        const curr = queue.shift();
        if(curr === undefined) break;
        if(processed.includes(curr)) break;
        for(let child of graph[curr]){
            // Guard for two way edges
            if(!(processed.includes(child)) && !(queue.includes(child))) { 
                queue.push(child);
            }
        }
        processed.push(curr);
    }
    return processed
}