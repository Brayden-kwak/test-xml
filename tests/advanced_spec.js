// TODO: Add tests that you find necessary.

const { isValidXML } = require("../src");

describe("advanced validator test", () => {
  it("True", () => {
    expect(isValidXML("<a />")).toBeTruthy();
    expect(isValidXML("<a></a>")).toBeTruthy();
    expect(isValidXML("<a>프론트 코드 하고 싶어요</a>")).toBeTruthy();
    expect(isValidXML("<a><b></b></a>")).toBeTruthy();
    expect(isValidXML("<a></a><b></b>")).toBeTruthy();
  });

  it("False", () => {
    expect(isValidXML("<a></a>>")).toBeFalsy();
    expect(isValidXML("<a><</a>")).toBeFalsy();
    expect(isValidXML("<a>></a>")).toBeFalsy();
    expect(isValidXML("<div></div><div></div>")).toBeFalsy();
    expect(isValidXML("<div></div><a></a><a></a>")).toBeFalsy();
    expect(isValidXML("<div><div></div></div>")).toBeFalsy();
    expect(isValidXML("<a><b><c><d></d></c></b></a>")).toBeFalsy();
  });
});
