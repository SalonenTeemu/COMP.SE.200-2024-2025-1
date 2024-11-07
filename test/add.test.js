import { expect } from "chai";
import add from "../src/add.js";

describe("add", () => {
  it("should return the sum of two numbers", () => {
    expect(add(1, 2)).to.equal(3);
    expect(add(-1, 2)).to.equal(1);
    expect(add(-1, -2)).to.equal(-3);
    expect(add(1, -2)).to.equal(-1);
  });
});