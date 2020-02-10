const tail = require("../tail");
const assert = require("chai").assert;

describe("Tail function:", () => {
  it("Returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });
  it("Returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Yo Yo", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });
  it("Returns [] for ['Hello']", () => {
    const result = tail(["Hello"]);
    assert.deepEqual(result, []);
  });
  it("Returns [] for []", () => {
    const result = tail([]);
    assert.deepEqual(result, []);
  });
});
