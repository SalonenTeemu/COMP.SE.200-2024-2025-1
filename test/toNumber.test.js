import { expect } from "chai";
import toNumber from "../src/toNumber.js";

describe("toNumber", () => {
  it("should return number when number or string number", () => {
    expect(toNumber(3.2)).to.equal(3.2);
    expect(toNumber("5.1")).to.equal(5.1);
  });
});
