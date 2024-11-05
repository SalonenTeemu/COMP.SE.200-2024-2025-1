import { expect } from "chai";
import eq from "../src/eq.js";

describe("eq", function () {
  it("should return true for identical objects", function () {
    const object = { a: 1 };
    expect(eq(object, object)).to.be.true;
  });

  it("should return false for different objects with same properties", function () {
    const object = { a: 1 };
    const other = { a: 1 };
    expect(eq(object, other)).to.be.false;
  });

  it("should return true for identical strings", function () {
    expect(eq("a", "a")).to.be.true;
  });

  it("should return false for string and object with same value", function () {
    expect(eq("a", Object("a"))).to.be.true;
  });

  it("should return true for NaN compared to NaN", function () {
    expect(eq(NaN, NaN)).to.be.true;
  });
});
