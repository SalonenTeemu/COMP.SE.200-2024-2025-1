import { expect } from "chai";
import add from "../src/add.js";
import productsData from "./data/products.js";

describe("add.js Unit Tests", () => {
  // Test basic arithmetic calculations:

  it("should return correct results of basic calculations", () => {
    expect(add(-1, 1)).to.equal(0);
    expect(add(999, 999)).to.equal(1998);
    expect(add(-5, -5)).to.equal(-10);
    expect(add(-5.2, -5.85)).to.be.closeTo(-11.05, 0.01);
  });

  it("should handle large numbers correctly", () => {
    expect(add(1e10, 1e10)).to.equal(2e10);
    expect(add(-1e10, 1e10)).to.equal(0);
  });

  it("should handle decimal numbers correctly", () => {
    expect(add(0.1, 0.2)).to.be.closeTo(0.3, 0.01);
    expect(add(1.234, 5.678)).to.be.closeTo(6.912, 0.001);
  });

  it("should handle adding zero correctly", () => {
    expect(add(0, 0)).to.equal(0);
    expect(add(5, 0)).to.equal(5);
    expect(add(0, 5)).to.equal(5);
  });

  it("should handle adding negative numbers correctly", () => {
    expect(add(-5, -5)).to.equal(-10);
    expect(add(-5, 5)).to.equal(0);
    expect(add(5, -5)).to.equal(0);
  });

  it("should handle adding very small numbers correctly", () => {
    expect(add(1e-10, 1e-10)).to.be.closeTo(2e-10, 1e-11);
    expect(add(-1e-10, 1e-10)).to.equal(0);
  });

  // Test product price addition with product objects from products.js:
  it("should return the sum price of two products", () => {
    expect(add(productsData[0].price, productsData[1].price)).to.be.closeTo(
      7.22,
      0.01
    );
  });

  it("should return the sum price of a product and zero as product price", () => {
    expect(add(productsData[0].price, 0)).to.equal(productsData[0].price);
  });

  it("should return the sum price of zero and a product as product price", () => {
    expect(add(0, productsData[1].price)).to.equal(productsData[1].price);
  });
});
