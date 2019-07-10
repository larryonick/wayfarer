const assert = require("chai").assert;

const app = require("../app");

describe("App", function() {
  it("app should returna function", function() {
    assert.equal(app(), "Hello");
  });
});
