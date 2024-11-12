import { expect } from "chai";
import eq from "../src/eq.js";

describe("eq.js Unit Tests", () => {
  it("should return true for same values", () => {
    const value1 = 5;
    const value2 = 5;
    expect(eq(value1, value2)).to.equal(true);
  });

  it("should return false for different values", () => {
    const value1 = 5;
    const value2 = 10;
    expect(eq(value1, value2)).to.equal(false);
  });

  it("should return false for identical objects with same properties and values", () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2 };
    expect(eq(obj1, obj2)).to.equal(false);
  });

  it("should return false when comparing a string to an object wrapping a string", () => {
    const value1 = "a";
    const value2 = Object("a");
    expect(eq(value1, value2)).to.equal(false);
  });

  it("should return true for comparing NaN with NaN", () => {
    const value1 = NaN;
    const value2 = NaN;
    expect(eq(value1, value2)).to.equal(true);
  });

  it("should return true for comparing two identical objects by reference", () => {
    const obj = { a: 1 };
    const objRef = obj;
    expect(eq(obj, objRef)).to.equal(true);
  });

  it("should return true for comparing identical primitive values of different types", () => {
    const value1 = "10";
    const value2 = 10;
    expect(eq(value1, value2)).to.equal(true);
  });

  it("should return false for different object types (Object vs Array)", () => {
    const obj = { a: 1 };
    const arr = [1];
    expect(eq(obj, arr)).to.equal(false);
  });

  it("should return true when comparing undefined to undefined", () => {
    const value1 = undefined;
    const value2 = undefined;
    expect(eq(value1, value2)).to.equal(true);
  });

  it("should return false for comparing a value with null", () => {
    const value1 = 5;
    const value2 = null;
    expect(eq(value1, value2)).to.equal(false);
  });
});
