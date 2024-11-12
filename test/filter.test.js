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
      ({ producer }) => producer === "Producer A"
    );
    const expectedProducts = productsData.filter(
      (product) => product.producer === "Producer A"
    );
    expect(filteredProducts).to.deep.equal(expectedProducts);
  });

  it("should filter products by content (ingredients) correctly", () => {
    const filteredProducts = filter(productsData, ({ contents }) =>
      contents.includes("Apple")
    );
    const expectedProducts = productsData.filter((product) =>
      product.contents.includes("Apple")
    );
    expect(filteredProducts).to.deep.equal(expectedProducts);
  });

  it("should return an empty array if no products match the filter criteria", () => {
    const filteredProducts = filter(
      productsData,
      ({ category }) => category === "Nonexistent Category"
    );
    expect(filteredProducts).to.deep.equal([[]]);
  });
});
