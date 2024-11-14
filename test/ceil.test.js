import { expect } from "chai";
import ceil from "../src/ceil.js";
import productsData from "./data/products.js";

describe("ceil.js Unit Tests", () => {
  it("should round up a number without precision", () => {
    expect(ceil(4.006)).to.equal(5);
  });

  it("should round up a number with precision of 2 decimal places", () => {
    expect(ceil(6.004, 2)).to.equal(6.01);
  });

  it("should round up a number with negative precision", () => {
    expect(ceil(6040, -2)).to.equal(6100);
  });

  it("should round up negative numbers correctly", () => {
    expect(ceil(-4.006)).to.equal(-4);
  });

  it("should round up negative numbers with precision", () => {
    expect(ceil(-6.004, 2)).to.equal(-6);
  });

  it("should return the same number if it is already an integer", () => {
    expect(ceil(5)).to.equal(5);
  });

  it("should handle values close to zero correctly", () => {
    expect(ceil(0.003, 2)).to.equal(0.01);
  });

  it("should round up large numbers correctly", () => {
    expect(ceil(1234567.1234, 2)).to.equal(1234567.13);
  });

  it("should round up product prices correctly", () => {
    expect(ceil(productsData[0].price)).to.equal(5);
    expect(ceil(productsData[5].price)).to.equal(6);
    expect(ceil(productsData[5].price, 2)).to.equal(5.56);
  });
});
