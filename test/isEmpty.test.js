import { expect } from "chai";
import isEmpty from "../src/isEmpty.js";
import productsData from "./data/products.js";

describe("isEmpty.js Unit Tests", () => {
  it("should return true for null", () => {
    expect(isEmpty(null)).to.be.true;
  });

  it("should return true for undefined", () => {
    expect(isEmpty(undefined)).to.be.true;
  });

  it("should return true for primitive values", () => {
    expect(isEmpty(1)).to.be.true;
    expect(isEmpty(true)).to.be.true;
    expect(isEmpty("")).to.be.true;
  });

  it("should return false for non-empty strings", () => {
    expect(isEmpty("abc")).to.be.false;
  });

  it("should return true for empty arrays", () => {
    expect(isEmpty([])).to.be.true;
  });

  it("should return false for non-empty arrays", () => {
    expect(isEmpty([1, 2, 3])).to.be.false;
  });

  it("should return false for non-empty arras of objects", () => {
    expect(isEmpty(productsData)).to.be.false;
  });

  it("should return true for empty objects", () => {
    expect(isEmpty({})).to.be.true;
  });

  it("should return false for non-empty objects", () => {
    const product = { name: "Apple", price: 10 };
    expect(isEmpty(product)).to.be.false;
  });

  it("should return true for empty Map objects", () => {
    const emptyMap = new Map();
    expect(isEmpty(emptyMap)).to.be.true;
  });

  it("should return false for non-empty Map objects", () => {
    const map = new Map();
    map.set("key", "value");
    expect(isEmpty(map)).to.be.false;
  });

  it("should return true for empty Set objects", () => {
    const emptySet = new Set();
    expect(isEmpty(emptySet)).to.be.true;
  });

  it("should return false for non-empty Set objects", () => {
    const set = new Set();
    set.add("value");
    expect(isEmpty(set)).to.be.false;
  });

  it("should return true for objects with no enumerable own properties", () => {
    const obj = Object.create({ inheritedProp: "value" });
    expect(isEmpty(obj)).to.be.true;
  });

  it("should return false for objects with enumerable own properties", () => {
    const obj = { name: "Product A", price: 10 };
    expect(isEmpty(obj)).to.be.false;
  });
});
