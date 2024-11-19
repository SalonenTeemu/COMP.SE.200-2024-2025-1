import { expect } from "chai";
import toNumber from "../src/toNumber.js";
import productsData from "./data/products.js";

describe("toNumber.js Unit Tests", () => {
  // Test basic number conversion and with product properties from products.js:

  it("should convert a product price number to a number", () => {
    expect(toNumber(productsData[0].price)).to.equal(productsData[0].price);
    expect(toNumber(productsData[1].price)).to.equal(productsData[1].price);
  });

  it("should convert a product price string to a number", () => {
    expect(toNumber(productsData[0].price.toString())).to.equal(
      productsData[0].price
    );
    expect(toNumber(productsData[1].price.toString())).to.equal(
      productsData[1].price
    );
  });

  it("should convert a product price object to a number", () => {
    const productObject = {
      valueOf: () => productsData[2].price,
    };
    expect(toNumber(productObject)).to.equal(productsData[2].price);
    expect(toNumber({})).to.be.NaN;
  });

  it("should convert boolean values to numbers", () => {
    expect(toNumber(true)).to.equal(1);
    expect(toNumber(false)).to.equal(0);

    expect(
      toNumber(productsData[3].contents.toLowerCase().includes("apple"))
    ).to.equal(1);
    expect(
      toNumber(productsData[3].contents.toLowerCase().includes("rye"))
    ).to.equal(0);
  });

  it("should convert an empty string to 0", () => {
    expect(toNumber("")).to.equal(0);
  });

  it("should convert functions to NaN", () => {
    expect(toNumber(() => {})).to.be.NaN;
  });

  it("should trim whitespace from strings before converting", () => {
    expect(toNumber("  7 ")).to.equal(7);
  });

  it("should convert Infinity to a number", () => {
    expect(toNumber(Infinity)).to.equal(Infinity);
    expect(toNumber(-Infinity)).to.equal(-Infinity);
  });

  it("should convert null to 0", () => {
    expect(toNumber(null)).to.equal(0);
  });

  it("should convert undefined to NaN", () => {
    expect(toNumber(undefined)).to.be.NaN;
  });

  it("should convert symbols to NaN", () => {
    expect(toNumber(Symbol("symbol"))).to.be.NaN;
  });

  it("should convert binary strings to numbers", () => {
    expect(toNumber("0b101")).to.equal(5);
    expect(toNumber("0b1101")).to.equal(13);
  });

  it("should convert octal strings to numbers", () => {
    expect(toNumber("0o10")).to.equal(8);
    expect(toNumber("0o77")).to.equal(63);
  });

  it("should convert hexadecimal strings to numbers", () => {
    expect(toNumber("0x1f")).to.equal(31);
    expect(toNumber("0xFF")).to.equal(255);
  });

  it("should return NaN for invalid hexadecimal strings", () => {
    expect(toNumber("0xG")).to.be.NaN;
  });
});
