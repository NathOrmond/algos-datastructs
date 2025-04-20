import "mocha";
import { expect } from "chai";
import { largestComponent } from "@src/graphs/largestComponent/largestComponent";

describe('[Graph Traversal]: Count Components Tests', () => {

    beforeEach(() => {
    });

    it('Test 1', () => {
        let rx = largestComponent({
            0: [8, 1, 5],
            1: [0],
            5: [0, 8],
            8: [0, 5],
            2: [3, 4],
            3: [2, 4],
            4: [3, 2]
        });
        expect(rx).to.be.deep.equal(4);
    });

    it('Test 2', () => {
        let rx = largestComponent({
            1: [2],
            2: [1, 8],
            6: [7],
            9: [8],
            7: [6, 8],
            8: [9, 7, 2]
        });
        expect(rx).to.be.deep.equal(6);
    });

    it('Test 3', () => {
        let rx = largestComponent({
            3: [],
            4: [6],
            6: [4, 5, 7, 8],
            8: [6],
            7: [6],
            5: [6],
            1: [2],
            2: [1]
        });
        expect(rx).to.be.deep.equal(5);
    });

    it('Test 4', () => {
        let rx = largestComponent({});
        expect(rx).to.be.deep.equal(0);
    });

    it('Test 5', () => {
        let rx = largestComponent({
            0: [4, 7],
            1: [],
            2: [],
            3: [6],
            4: [0],
            6: [3],
            7: [0],
            8: []
        });
        expect(rx).to.be.deep.equal(3);
    });
});