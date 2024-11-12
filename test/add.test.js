import { expect } from "chai";
import add from "../src/add.js";
import productsData from "./data/products.js";

describe("add.js Unit Tests", () => {
  it("should return the sum price of two products", () => {
    expect(add(productsData[0].price, productsData[1].price)).to.equal(7);
  });

  it("should return the sum price of a product and zero", () => {
    expect(add(productsData[0].price, 0)).to.equal(5);
  });

  it("should return the sum price of zero and a product", () => {
    expect(add(0, productsData[1].price)).to.equal(2);
  });

  it("should handle negative prices correctly", () => {
    expect(add(productsData[0].price, -productsData[1].price)).to.equal(3);
  });
});
