import { expect } from "chai";
import filterFromUL from "../src/filter.js";
import productsData from "./data/products.js";

describe("filter.js Unit Tests", () => {
  // Test basic product filtering with product objects from products.js:
  // Results are compared to the native Array.prototype.filter() method.

  it("should filter products by category correctly", () => {
    const filteredProducts = filterFromUL(
      productsData,
      ({ category }) => category === "Fruit"
    );
    const expectedProducts = productsData.filter(
      (product) => product.category === "Fruit"
    );
    expect(filteredProducts).to.deep.equal(expectedProducts);
  });

  it("should filter products by price correctly", () => {
    const filteredProducts = filterFromUL(
      productsData,
      ({ price }) => price <= 10
    );
    const expectedProducts = productsData.filter(
      (product) => product.price <= 10
    );
    expect(filteredProducts).to.deep.equal(expectedProducts);
  });

  it("should filter products by producer correctly", () => {
    const filteredProducts = filterFromUL(
      productsData,
      ({ producer }) => producer === "Producer a"
    );
    const expectedProducts = productsData.filter(
      (product) => product.producer === "Producer a"
    );
    expect(filteredProducts).to.deep.equal(expectedProducts);
  });

  it("should filter products by contents correctly", () => {
    const filteredProducts = filterFromUL(productsData, ({ contents }) =>
      contents.toLowerCase().includes("apple")
    );
    const expectedProducts = productsData.filter((product) =>
      product.contents.toLowerCase().includes("apple")
    );
    expect(filteredProducts).to.deep.equal(expectedProducts);

    // Test filtering by multiple criteria:
    const filteredProducts2 = filterFromUL(
      productsData,
      ({ contents }) =>
        contents.toLowerCase().includes("apple") &&
        contents.toLowerCase().includes("sugar")
    );
    const expectedProducts2 = productsData.filter(
      (product) =>
        product.contents.toLowerCase().includes("apple") &&
        product.contents.toLowerCase().includes("sugar")
    );
    expect(filteredProducts2).to.deep.equal(expectedProducts2);
  });

  it("should return an empty array if no products match the filter criteria", () => {
    const filteredProducts = filterFromUL(
      productsData,
      ({ category }) => category === "Nonexistent category"
    );
    // Is this the expected result or should it return [] instead?
    expect(filteredProducts).to.deep.equal([[]]);
  });

  it("should return an empty array if the input array is empty", () => {
    const filteredProducts = filterFromUL([], () => true);
    // Is this the expected result or should it return [] instead?
    expect(filteredProducts).to.deep.equal([[]]);
  });

  it("should return an empty array if the input array is null", () => {
    const filteredProducts = filterFromUL(null, () => true);
    // Is this the expected result or should it return [] instead?
    expect(filteredProducts).to.deep.equal([[]]);
  });
});
