import { AdjacencyList, Node } from "../graphs.types";


export const depthFirstSearch = (graph: AdjacencyList, start: Node) => {
    if(Object.entries(graph).length === 0) return [];
    const processed: Node[] = [];
    const visited = new Set<Node>(); 
    const stack = [start];
    visited.add(start); 
    
    while(stack.length > 0) {
        const curr = stack.pop();
        if (curr === undefined) continue;
        processed.push(curr);
        const children = graph[curr] || [];
        
        /**
         * For true DFS you really want to ensure you push nodes
         * to the right before left nodes, so left nodes are processed 
         * first, but for an adjacency list we don't have a nice 
         * notion of ordering relations
        */
        for (let i = children.length - 1; i >= 0; i--) {
            const child = children[i];
            if (!visited.has(child)) {
                stack.push(child);
                visited.add(child); 
            }
        }
    }
    
    return processed;
}