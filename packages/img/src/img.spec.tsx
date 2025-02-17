import { render } from "@react-email/render";
import { Img } from "./index";

describe("<Img> component", () => {
  it("passes style and other props correctly", async () => {
    const style = { backgroundColor: "red", border: "solid 1px black" };
    const html = await render(
      <Img
        alt="Cat"
        data-testid="img-test"
        height="300"
        src="cat.jpg"
        style={style}
        width="300"
      />,
    );
    expect(html).toContain("background-color:red");
    expect(html).toContain("border:solid 1px black");
    expect(html).toContain('data-testid="img-test"');
  });

  it("renders correctly", async () => {
    const actualOutput = await render(
      <Img alt="Cat" height="300" src="cat.jpg" width="300" />,
    );
    expect(actualOutput).toMatchInlineSnapshot(
      '"<!DOCTYPE html PUBLIC \\"-//W3C//DTD XHTML 1.0 Transitional//EN\\" \\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\\"><link rel=\\"preload\\" as=\\"image\\" href=\\"cat.jpg\\"/><img alt=\\"Cat\\" height=\\"300\\" src=\\"cat.jpg\\" style=\\"display:block;outline:none;border:none;text-decoration:none\\" width=\\"300\\"/>"',
    );
  });
});
