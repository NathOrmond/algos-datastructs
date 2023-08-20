"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// test harness 
require("mocha");
const chai_1 = require("chai");
const implementation_1 = require("./implementation");
describe('Implementation Test', function () {
    const myExampleProperty = "I am a string literal";
    let testType;
    this.beforeEach(() => {
        testType = { exampleProperty: myExampleProperty };
    });
    it('Should run the test correctly', function () {
        (0, chai_1.expect)((0, implementation_1.algorithm)(testType)).to.equal(testType);
        (0, chai_1.expect)((0, implementation_1.algorithm)(testType).exampleProperty).to.equal(myExampleProperty);
    });
});
