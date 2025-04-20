import "mocha";
import { expect } from "chai";
import { depthFirstSearch } from "@src/graphs/common/depthFirstSearch";

describe('[Graph Traversal]: Depth First Search Tests', () => {
    beforeEach(() => {
    });

    it('Test 1: Simple graph with cycles', () => {
        let rx = depthFirstSearch({
            0: [8, 1, 5],
            1: [0],
            5: [0, 8],
            8: [0, 5],
            2: [3, 4],
            3: [2, 4],
            4: [3, 2]
        }, 0);
        expect(rx).to.be.deep.equal([0, 8, 1, 5]);
    });

    it('Test 2: Connected components', () => {
        let rx = depthFirstSearch({
            1: [2],
            2: [1, 8],
            6: [7],
            9: [8],
            7: [6, 8],
            8: [9, 7, 2]
        }, 1);
        expect(rx).to.be.deep.equal([1, 2, 8, 9, 7, 6]);
    });

    it('Test 3: Graph with cycles, starting from middle', () => {
        let rx = depthFirstSearch({
            3: [],
            4: [6],
            6: [4, 5, 7, 8],
            8: [6],
            7: [6],
            5: [6],
            1: [2],
            2: [1]
        }, 4);
        expect(rx).to.be.deep.equal([4, 6, 5, 7, 8]);
    });

    it('Test 4: Empty graph', () => {
        let rx = depthFirstSearch({}, 0);
        expect(rx).to.be.deep.equal([]);
    });

    it('Test 5: Another cyclic graph', () => {
        let rx = depthFirstSearch({
            0: [4, 7],
            1: [],
            2: [],
            3: [6],
            4: [0],
            6: [3],
            7: [0],
            8: []
        }, 0);
        expect(rx).to.be.deep.equal([0, 4, 7]);
    });
});