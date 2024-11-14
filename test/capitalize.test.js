import { expect } from "chai";
import capitalize from "../src/capitalize.js";
import productsData from "./data/products.js";

describe("capitalize.js Unit Tests", () => {
  it("should capitalize the first letter and lowercase the rest", () => {
    expect(capitalize("FRED")).to.equal("Fred");
  });

  it("should capitalize a string with mixed casing", () => {
    expect(capitalize("fRed")).to.equal("Fred");
  });

  it("should return an empty string when input is empty", () => {
    expect(capitalize("")).to.equal("");
  });

  it("should handle single lowercase character correctly", () => {
    expect(capitalize("a")).to.equal("A");
  });

  it("should handle single uppercase character correctly", () => {
    expect(capitalize("A")).to.equal("A");
  });

  it("should return a string starting with numbers as it is", () => {
    expect(capitalize("123abc")).to.equal("123abc");
  });

  it("should return a string with all lowercase letters if given a mixed case string", () => {
    expect(capitalize("hello WORLD")).to.equal("Hello world");
  });

  it("should return a string starting with special characters as it is", () => {
    expect(capitalize("@hello")).to.equal("@hello");
  });

  it("should capitalize the first letter of product property and lowercase the rest", () => {
    expect(capitalize(productsData[0].name)).to.equal("Apple juice");
    expect(capitalize(productsData[0].category))
      .to.equal(productsData[0].category)
      .to.equal("Beverage");
    expect(capitalize(productsData[2].producer)).to.equal("Producer a");
  });
});
