// TODO: Add tests that you find necessary.

const { isValidXML } = require("../src");

describe("advanced validator test", () => {
  it("True", () => {
    expect(isValidXML("<img />")).toBeTruthy();
  });

  it("False", () => {
    expect(isValidXML("<div></div>>")).toBeFalsy();
    expect(isValidXML("<span><</span>")).toBeFalsy();
    expect(isValidXML("<a>></a>")).toBeFalsy();
    expect(isValidXML("<div></div><div></div>")).toBeFalsy();
    expect(isValidXML("</>")).toBeFalsy();
    expect(isValidXML("<div><span></div></span>")).toBeFalsy();
  });  
});
