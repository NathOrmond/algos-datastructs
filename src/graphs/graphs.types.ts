type Node = number;
type ExtendedNode = string | number;

interface AdjacencyList {
  [key: Node]: Node[];
}

type ExtendedAdjacencyList = {
  [key: ExtendedNode]: ExtendedNode[];
};

export {
    Node, 
    AdjacencyList,
    ExtendedNode,
    ExtendedAdjacencyList
}