// test harness 
import "mocha";
import { expect } from "chai";

// under test
import { addBinary } from "./addbinary";

describe('Implementation Test', function() {

    this.beforeEach(() => {});

    it('Test case', () => {
        let input1 = "";
        let input2 = "";
        let expected = "";
        expect(addBinary(input1, input2)).to.equal(expected);
    });


    it('Test case', () => {
        let input1 = "1010";
        let input2 = "1011";
        let expected = "10101";
        expect(addBinary(input1, input2)).to.equal(expected);
    });



    it('Test case', () => {
        let input1 = "11";
        let input2 = "1";
        let expected = "100";
        expect(addBinary(input1, input2)).to.equal(expected);
    });

});