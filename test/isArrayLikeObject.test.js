import { expect } from "chai";
import isArrayLikeObject from "../src/isArrayLikeObject.js";

describe("isArrayLikeObject", () => {
  it("should return true when given [1, 2, 3]", () => {
    expect(isArrayLikeObject([1, 2, 3])).to.equal(true);
  });
});
