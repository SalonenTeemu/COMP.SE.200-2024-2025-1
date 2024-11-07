import { expect } from "chai";
import clamp from "../src/clamp.js";

describe("clamp", () => {
  it("should return -5 when given -10, -5, 5", () => {
    expect(clamp(-10, -5, 5)).to.equal(-5);
  });
});
