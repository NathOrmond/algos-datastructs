// test harness 
import "mocha";
import { expect } from "chai";

// under test
import { uncompress } from "./uncompress";

describe('Uncompress Tests', function () {

 this.beforeEach(() => { });

 it('Test case 1', () => {
  let input = "2c3a1t";
  let expected = 'ccaaat';
  expect(uncompress(input)).to.equal(expected); 
 });

 it('Test case 2', () => {
  let input = "4s2b";
  let expected = 'ssssbb';
  expect(uncompress(input)).to.equal(expected);
 });

 it('Test case 3', () => {
  let input = "2p1o5p";
  let expected = 'ppoppppp';
  expect(uncompress(input)).to.equal(expected);
 });


 it('Test case 4', () => {
  let input = "3n12e2z";
  let expected = 'nnneeeeeeeeeeeezz';
  expect(uncompress(input)).to.equal(expected);
 });

 it('Test case 4', () => {
  let input = "127y";
  let expected = 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy';
  expect(uncompress(input)).to.equal(expected);
 });

});