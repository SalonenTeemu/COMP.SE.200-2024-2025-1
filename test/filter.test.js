import { expect } from "chai";
import filter from "../src/filter.js";

describe("filter", () => {
  it("should return [2, 4] when given [1, 2, 3, 4] and n => n % 2 === 0", () => {
    expect(filter([1, 2, 3, 4], (n) => n % 2 === 0)).to.eql([2, 4]);
  });
});
