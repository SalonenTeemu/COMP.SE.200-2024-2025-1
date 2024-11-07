import { expect } from "chai";
import ceil from "../src/ceil.js";

describe("ceil", () => {
  it("should return 5 when given 4.006", () => {
    expect(ceil(4.006)).to.equal(5);
  });
});
