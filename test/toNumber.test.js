import { expect } from "chai";
import toNumber from "../src/toNumber.js";
import productsData from "./data/products.js";

describe("toNumber.js Unit Tests", () => {
  it("should convert a price number to a number", () => {
    expect(toNumber(productsData[0].price)).to.equal(productsData[0].price);
    expect(toNumber(productsData[1].price)).to.equal(productsData[1].price);
  });

  it("should convert a price string to a number", () => {
    expect(toNumber(productsData[0].price.toString())).to.equal(
      productsData[0].price
    );
    expect(toNumber(productsData[1].price.toString())).to.equal(
      productsData[1].price
    );
  });

  it("should convert an price object to a number", () => {
    const productObject = {
      valueOf: () => productsData[2].price,
    };
    expect(toNumber(productObject)).to.equal(productsData[2].price);
    expect(toNumber({})).to.be.NaN;
  });

  it("should convert boolean values to numbers", () => {
    expect(toNumber(productsData[3].contents.includes("Apple"))).to.equal(1);
    expect(toNumber(productsData[3].contents.includes("Rye"))).to.equal(0);
  });

  it("should convert an empty string to 0", () => {
    expect(toNumber("")).to.equal(0);
  });

  it("should trim whitespace from strings before converting", () => {
    expect(toNumber("  7 ")).to.equal(7);
  });
});
