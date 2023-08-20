// test harness 
import "mocha";
import { expect } from "chai";

// under test
import { ExampleType } from "./types";
import { algorithm } from "./implementation";

describe('Implementation Test', function() {

    const myExampleProperty: string = "I am a string literal";
    let testType: ExampleType;

    this.beforeEach(() => {
        testType = { exampleProperty: myExampleProperty };
    });

    it('Should run the test correctly', function() {
        expect(algorithm(testType)).to.equal(testType);
        expect(algorithm(testType).exampleProperty).to.equal(myExampleProperty);
    });

});