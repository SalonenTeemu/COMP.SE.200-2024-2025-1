import { expect } from "chai";
import reduce from "../src/reduce.js";
import productsData from "./data/products.js";

describe("reduce.js Unit Tests", () => {
  it("should correctly sum the prices of all products", () => {
    const sum = reduce(
      productsData,
      (total, product) => total + product.price,
      0
    );
    expect(sum).to.equal(41);
  });

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
      Beverage: ["Apple Juice"],
      Fruit: ["Banana", "Organic Apple"],
      Soup: ["Carrot Soup"],
      Dessert: ["Apple Pie"],
    });
  });

  it("should correctly apply an initial accumulator value", () => {
    const initialValue = 10;
    const sumWithInitial = reduce(
      productsData,
      (total, product) => total + product.price,
      initialValue
    );
    expect(sumWithInitial).to.equal(51);
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

  it("should handle objects with non-enumerable properties correctly", () => {
    const objWithNonEnumerable = Object.create(
      {},
      {
        property1: { value: "value1", enumerable: true },
        property2: { value: "value2", enumerable: false },
      }
    );
    const reducedObj = reduce(
      objWithNonEnumerable,
      (acc, value, key) => {
        acc[key] = value;
        return acc;
      },
      {}
    );
    expect(reducedObj).to.deep.equal({ property1: "value1" });
  });

  it("should return the initial accumulator if collection is empty", () => {
    const result = reduce([], (acc, val) => acc + val, 100);
    expect(result).to.equal(100);
  });
});
