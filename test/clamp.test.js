import { expect } from "chai";
import clamp from "../src/clamp.js";
import productsData from "./data/products.js";

describe("clamp.js Unit Tests", () => {
  it("should clamp a out of bounds number within the inclusive lower and upper bounds", () => {
    expect(clamp(-10, -5, 5)).to.equal(-5);
    expect(clamp(10, -5, 5)).to.equal(5);
    expect(clamp(productsData[0].price, 8, 10)).to.equal(8);
  });

  it("should handle lower bound greater than upper bound", () => {
    expect(clamp(-9, 5, -5)).to.equal(-5);
    expect(clamp(11, 5, -5)).to.equal(5);
    expect(clamp(productsData[0].price, 10, 5)).to.equal(5);
  });

  it("should handle number equal to lower bound", () => {
    expect(clamp(-10, -10, 10)).to.equal(-10);
    expect(clamp(productsData[0].price, 5, 10)).to.equal(5);
  });

  it("should handle number equal to upper bound", () => {
    expect(clamp(5, -5, 5)).to.equal(5);
    expect(clamp(productsData[0].price, 0, 5)).to.equal(5);
  });

  it("should handle number within bounds", () => {
    expect(clamp(3, 1, 5)).to.equal(3);
    expect(clamp(productsData[0].price, 0, 10)).to.equal(productsData[0].price);
  });
});