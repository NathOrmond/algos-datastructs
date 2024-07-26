// test harness 
import "mocha";
import { expect } from "chai";

// under test
import { encode } from "./encode";

describe('encode Tests', function () {

 this.beforeEach(() => { });

 it('Test case 1', () => {
  let expected = "2c3a1t";
  let input = 'ccaaat';
  expect(encode(input)).to.equal(expected);
 });

 it('Test case 2', () => {
  let expected = "4s2b";
  let input = 'ssssbb';
  expect(encode(input)).to.equal(expected);
 });

 it('Test case 3', () => {
  let expected = "2p1o5p";
  let input = 'ppoppppp';
  expect(encode(input)).to.equal(expected);
 });


 it('Test case 4', () => {
  let expected = "3n12e2z";
  let input = 'nnneeeeeeeeeeeezz';
  expect(encode(input)).to.equal(expected);
 });

 it('Test case 4', () => {
  let expected = "127y";
  let input = 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy';
  expect(encode(input)).to.equal(expected);
 });

});