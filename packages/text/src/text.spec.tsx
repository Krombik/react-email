import { render } from "@react-email/render";
import { Text } from "./index";

describe("<Text> component", () => {
  it("renders children correctly", async () => {
    const testMessage = "Test message";
    const html = await render(<Text>{testMessage}</Text>);
    expect(html).toContain(testMessage);
  });

  it("passes style and other props correctly", async () => {
    const style = { fontSize: "16px" };
    const html = await render(
      <Text data-testid="text-test" style={style}>
        Test
      </Text>,
    );
    expect(html).toContain("font-size:16px");
    expect(html).toContain('data-testid="text-test"');
  });

  it("renders correctly", async () => {
    const actualOutput = await render(<Text>Lorem ipsum</Text>);
    expect(actualOutput).toMatchInlineSnapshot(
      `"<!DOCTYPE html PUBLIC \\"-//W3C//DTD XHTML 1.0 Transitional//EN\\" \\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\\"><p style=\\"font-size:14px;line-height:24px;margin:16px 0\\">Lorem ipsum</p>"`,
    );
  });
});
