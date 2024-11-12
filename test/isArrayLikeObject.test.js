import { expect } from "chai";
import isArrayLikeObject from "../src/isArrayLikeObject.js";
import productsData from "./data/products.js";

describe("isArrayLikeObject.js Unit Tests", () => {
  it("should return true for an array of numbers", () => {
    const value = [1, 2, 3];
    expect(isArrayLikeObject(value)).to.equal(true);
  });

  it("should return true for an array of objects", () => {
    expect(isArrayLikeObject(productsData)).to.equal(true);
  });

  it("should return false for a string", () => {
    const value = "abc";
    expect(isArrayLikeObject(value)).to.equal(false);
  });

  it("should return false for a function", () => {
    const value = function () {};
    expect(isArrayLikeObject(value)).to.equal(false);
  });

  it("should return false for a plain object", () => {
    const value = { a: 1, b: 2 };
    expect(isArrayLikeObject(value)).to.equal(false);
  });

  it("should return true for an arguments object", () => {
    function test() {
      return isArrayLikeObject(arguments);
    }
    expect(test(1, 2, 3)).to.equal(true);
  });

  it("should return false for null", () => {
    const value = null;
    expect(isArrayLikeObject(value)).to.equal(false);
  });

  it("should return false for undefined", () => {
    const value = undefined;
    expect(isArrayLikeObject(value)).to.equal(false);
  });
});
