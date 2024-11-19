import { expect } from "chai";
import isArrayLikeObject from "../src/isArrayLikeObject.js";
import productsData from "./data/products.js";

describe("isArrayLikeObject.js Unit Tests", () => {
  // Test basic array-like object checks:

  it("should return true for an array of numbers", () => {
    expect(isArrayLikeObject([1, 2, 3])).to.be.true;
  });

  it("should return true for an array of products", () => {
    expect(isArrayLikeObject(productsData)).to.be.true;
  });

  it("should return false for a string", () => {
    expect(isArrayLikeObject("abc")).to.be.false;
  });

  it("should return false for a function", () => {
    const fun = function () {};
    expect(isArrayLikeObject(fun)).to.be.false;
  });

  it("should return false for a plain object", () => {
    const value = { a: 1, b: 2 };
    expect(isArrayLikeObject(value)).to.be.false;
  });

  it("should return true for an arguments object", () => {
    function test() {
      return isArrayLikeObject(arguments);
    }
    expect(test(1, 2, 3)).to.be.true;
  });

  it("should return false for null", () => {
    expect(isArrayLikeObject(null)).to.be.false;
  });

  it("should return false for undefined", () => {
    expect(isArrayLikeObject(undefined)).to.be.false;
  });
});
