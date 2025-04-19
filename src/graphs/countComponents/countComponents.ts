import { Node, AdjacencyList } from "@graphs/graphs.types";

const connectedComponentsCount = (graph: AdjacencyList): number => {
    let count = 0;
    const visited = new Set();
    for (let node in graph) {
        if (visited.has(node)) continue;
        count++; 

        // BFS
        const queue: Array<Node> = [Number(node)];
        visited.add(node);
        while (queue.length > 0) {
            const curr = queue.shift();
            if (curr === undefined) break;
            for (let adjacent of graph[curr]) {
                const adjacentStr = String(adjacent);
                // Only add unvisited neighbors to the queue
                if (!visited.has(adjacentStr)) {
                    visited.add(adjacentStr);  
                    queue.push(parseInt(adjacentStr));
                }
            }
        }
    }

    return count;
};

export { connectedComponentsCount };
