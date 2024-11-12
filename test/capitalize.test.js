import { expect } from "chai";
import capitalize from "../src/capitalize.js";
import productsData from "./data/products.js";

describe("capitalize.js Unit Tests", () => {
  it("should capitalize the first letter and lowercase the rest", () => {
    const value = "FRED";
    expect(capitalize(value)).to.equal("Fred");
    expect(capitalize(productsData[0].name)).to.equal("Apple juice");
    expect(capitalize(productsData[0].category)).to.equal(
      productsData[0].category
    );
  });

  it("should capitalize a string with mixed casing", () => {
    const value = "fRed";
    expect(capitalize(value)).to.equal("Fred");
  });

  it("should return an empty string when input is empty", () => {
    const value = "";
    expect(capitalize(value)).to.equal("");
  });

  it("should handle single lowercase character correctly", () => {
    const value = "a";
    expect(capitalize(value)).to.equal("A");
  });

  it("should handle single uppercase character correctly", () => {
    const value = "A";
    expect(capitalize(value)).to.equal("A");
  });

  it("should return a string starting with numbers as it is", () => {
    const value = "123abc";
    expect(capitalize(value)).to.equal("123abc");
  });

  it("should return a string with all lowercase letters if given a mixed case string", () => {
    const value = "hello WORLD";
    expect(capitalize(value)).to.equal("Hello world");
  });

  it("should return a string starting with special characters as it is", () => {
    const value = "@hello";
    expect(capitalize(value)).to.equal("@hello");
  });
});
