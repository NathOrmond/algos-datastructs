import "mocha";
import { expect } from "chai";
import { connectedComponentsCount } from "@src/graphs/countComponents/countComponents";

describe('[Graph Traversal]: Count Components Tests', () => {

    beforeEach(() => {
    });

    it('Test 1', () => {
        let rx = connectedComponentsCount({
            0: [8, 1, 5],
            1: [0],
            5: [0, 8],
            8: [0, 5],
            2: [3, 4],
            3: [2, 4],
            4: [3, 2]
        });
        
        expect(rx).to.be.deep.equal(2);
    });

    it('Test 2', () => {
        let rx = connectedComponentsCount({
            1: [2],
            2: [1,8],
            6: [7],
            9: [8],
            7: [6, 8],
            8: [9, 7, 2]
        });
        expect(rx).to.be.deep.equal(1);
    });

    it('Test 3', () => {
        let rx = connectedComponentsCount({
            3: [],
            4: [6],
            6: [4, 5, 7, 8],
            8: [6],
            7: [6],
            5: [6],
            1: [2],
            2: [1]
        });
        expect(rx).to.be.deep.equal(3);
    });

    it('Test 4', () => {
        let rx = connectedComponentsCount({});
        expect(rx).to.be.deep.equal(0);
    });

    it('Test 5', () => {
        let rx = connectedComponentsCount({
            0: [4,7],
            1: [],
            2: [],
            3: [6],
            4: [0],
            6: [3],
            7: [0],
            8: []
        });
        expect(rx).to.be.deep.equal(5);
    });
});