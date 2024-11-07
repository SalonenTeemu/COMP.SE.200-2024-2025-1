import { expect } from "chai";
import reduce from "../src/reduce.js";

describe("reduce", () => {
  it("should return 3 when given [1, 2], (sum, n) => sum + n, 0", () => {
    expect(reduce([1, 2], (sum, n) => sum + n, 0)).to.equal(3);
  });
});
