import { expect } from "chai";
import ceil from "../src/ceil.js";
import productsData from "./data/products.js";

describe("ceil.js Unit Tests", () => {
  it("should round up a number without precision", () => {
    const value = 4.006;
    expect(ceil(value)).to.equal(5);
  });

  it("should round up a number with precision of 2 decimal places", () => {
    const value = 6.004;
    expect(ceil(value, 2)).to.equal(6.01);
  });

  it("should round up a number with negative precision", () => {
    const value = 6040;
    expect(ceil(value, -2)).to.equal(6100);
  });

  it("should round up negative numbers correctly", () => {
    const value = -4.006;
    expect(ceil(value)).to.equal(-4);
  });

  it("should round up negative numbers with precision", () => {
    const value = -6.004;
    expect(ceil(value, 2)).to.equal(-6);
  });

  it("should return the same number if it is already an integer", () => {
    const value = 5;
    expect(ceil(value)).to.equal(5);
    expect(ceil(productsData[0].price)).to.equal(5);
  });

  it("should handle values close to zero correctly", () => {
    const value = 0.003;
    expect(ceil(value, 2)).to.equal(0.01);
  });

  it("should round up large numbers correctly", () => {
    const value = 1234567.1234;
    expect(ceil(value, 2)).to.equal(1234567.13);
  });
});
