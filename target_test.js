const fileName = () => {
  const theError = new Error("here I am");
  return /\\(\w+\.js):/.exec(theError.stack)[1];
};

/* eslint-env mocha */

const wish = require("wish");
const { Target, Adaptee } = require("./target.js");

describe("tests run on the 'target.js' file:", () => {
  // setup test
  it("verifies the test file name", () => {
    wish(fileName() === "target_test.js");
  });
  // functional tests
  const formal = new Target();
  it("verifies that formal's method hello returns \"hello\"", () => {
    wish(formal.hello() === "hello");
  });
  it("verifies that formal's method goodbye returns \"goodbye\"", () => {
    wish(formal.goodbye() === "goodbye");
  });
  const casual = new Adaptee();
  it("verifies that casual's method hi returns \"hi\"", () => {
    wish(casual.hi() === "hi");
  });
  it("verifies that casual's method bye returns \"bye\"", () => {
    wish(casual.bye() === "bye");
  });
});
