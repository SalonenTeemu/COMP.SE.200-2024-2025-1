import { expect } from "chai";
import reduce from "../src/reduce.js";
import add from "../src/add.js";
import productsData from "./data/products.js";

describe("reduce.js Unit Tests", () => {
  // Test basic product price summing with product objects from products.js:
  it("should correctly sum the prices of all products", () => {
    const sum = reduce(
      productsData,
      (total, product) => total + product.price,
      0
    );
    expect(sum).to.be.closeTo(64.27, 0.01);

    // Test with the add() function:
    const sum2 = reduce(
      productsData,
      (total, product) => add(total, product.price),
      0
    );
    expect(sum2).to.be.closeTo(64.27, 0.01);
  });

  // Test basic product grouping with product objects from products.js:
  it("should correctly group products by category", () => {
    const groupedByCategory = reduce(
      productsData,
      (result, product) => {
        if (!result[product.category]) {
          result[product.category] = [];
        }
        result[product.category].push(product.name);
        return result;
      },
      {}
    );

    expect(groupedByCategory).to.deep.equal({
      Beverage: ["Apple juice"],
      Fruit: ["Banana", "Organic apple"],
      Soup: ["Carrot soup"],
      Dessert: ["Apple pie", "Ice cream"],
    });
  });

  it("should correctly apply an initial accumulator value", () => {
    const initialValue = 10;
    const sumWithInitial = reduce(
      productsData,
      (total, product) => total + product.price,
      initialValue
    );
    expect(sumWithInitial).to.be.closeTo(74.27, 0.01);
  });

  it("should correctly handle an empty array", () => {
    const sumEmpty = reduce([], (total, product) => total + product.price, 0);
    expect(sumEmpty).to.equal(0);
  });

  it("should correctly handle an empty object", () => {
    const resultEmpty = reduce(
      {},
      (result, product) => {
        result[product.category] = product.name;
        return result;
      },
      {}
    );
    expect(resultEmpty).to.deep.equal({});
  });

  it("should return the initial accumulator if collection is empty", () => {
    const result = reduce([], (acc, val) => acc + val, 100);
    expect(result).to.equal(100);

    // Test with the add() function:
    const result2 = reduce([], (acc, val) => add(acc + val), 0);
    expect(result2).to.equal(0);
  });
});
