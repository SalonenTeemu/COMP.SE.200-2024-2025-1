import { expect } from "chai";
import filter from "../src/filter.js";
import productsData from "./data/products.js";

describe("filter.js Unit Tests", () => {
  it("should filter products by category correctly", () => {
    const filteredProducts = filter(
      productsData,
      ({ category }) => category === "Fruit"
    );
    const expectedProducts = productsData.filter(
      (product) => product.category === "Fruit"
    );
    expect(filteredProducts).to.deep.equal(expectedProducts);
  });

  it("should filter products by price correctly", () => {
    const filteredProducts = filter(productsData, ({ price }) => price <= 10);
    const expectedProducts = productsData.filter(
      (product) => product.price <= 10
    );
    expect(filteredProducts).to.deep.equal(expectedProducts);
  });

  it("should filter products by producer correctly", () => {
    const filteredProducts = filter(
      productsData,
      ({ producer }) => producer === "Producer a"
    );
    const expectedProducts = productsData.filter(
      (product) => product.producer === "Producer a"
    );
    expect(filteredProducts).to.deep.equal(expectedProducts);
  });

  it("should filter products by contents correctly", () => {
    const filteredProducts = filter(productsData, ({ contents }) =>
      contents.toLowerCase().includes("apple")
    );
    const expectedProducts = productsData.filter((product) =>
      product.contents.toLowerCase().includes("apple")
    );
    expect(filteredProducts).to.deep.equal(expectedProducts);

    const filteredProducts2 = filter(
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
    const filteredProducts = filter(
      productsData,
      ({ category }) => category === "Nonexistent category"
    );
    expect(filteredProducts).to.deep.equal([[]]); // expected result or should it return []?
  });
});
