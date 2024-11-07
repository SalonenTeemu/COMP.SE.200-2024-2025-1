import { expect } from "chai";
import isEmpty from "../src/isEmpty.js";

describe("isEmpty", () => {
  it("should return true when empty or null", () => {
    expect(isEmpty(null)).to.equal(true);
    expect(isEmpty([])).to.equal(true);
  });
});
