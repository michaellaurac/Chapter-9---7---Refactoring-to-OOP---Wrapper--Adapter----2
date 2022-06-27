const fileName = () => {
  const theError = new Error("here I am");
  return /\\(\w+\.js):/.exec(theError.stack)[1];
};

/* eslint-env mocha */

const wish = require("wish");
const Target = require("./target.js");

describe("tests run on the 'target.js' file:", () => {
  // setup test
  it("verifies the test file name", () => {
    wish(fileName() === "target_test.js");
  });
  // functional tests
  console.log(Target);
});
