import { expect } from "chai";
import capitalize from "../src/capitalize.js";

describe("capitalize", () => {
  it("Should capitalize the first letter of a string", () => {
    expect(capitalize("FRED")).to.equal("Fred");
  });
});
