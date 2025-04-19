type Node = number;

interface AdjacencyList {
  [key: Node]: Node[];
}

export {
    Node, 
    AdjacencyList
}