const head = require("../head");
const assert = require("chai").assert;

describe("Head function:", () => {
  it("Returns 5 for [5]", () => {
    assert.strictEqual(head([5]), 5);
  });
  it("Returns undefined for []", () => {
    assert.isUndefined(head([]));
  });
  it("Returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });
  it("Returns Hello for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
});
