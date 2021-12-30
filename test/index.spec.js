const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe("dom testing", () => {
  let elem;
  beforeEach(function () {
    return JSDOM.fromFile("src/index.html").then((dom) => {
      elem = dom.window.document.querySelector("[type=submit]");
    });
  });
  it("should return textContent", () => {
    const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
    expect(dom.window.document.querySelector("p").textContent).toEqual(
      "Hello world"
    );
  });
  it("should return textContent of first list elem", () => {
    expect(elem.value).toEqual("Add");
  });
});