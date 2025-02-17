import { render } from "@react-email/render";
import { Column } from "./index";

describe("<Column> component", () => {
  it("renders children correctly", async () => {
    const testMessage = "Test message";
    const html = await render(<Column>{testMessage}</Column>);
    expect(html).toContain(testMessage);
  });

  it("passes style and other props correctly", async () => {
    const style = { backgroundColor: "red" };
    const html = await render(
      <Column data-testid="column-test" style={style}>
        Test
      </Column>,
    );
    expect(html).toContain('style="background-color:red"');
    expect(html).toContain('data-testid="column-test"');
  });

  it("renders correctly", async () => {
    const actualOutput = await render(<Column>Lorem ipsum</Column>);
    expect(actualOutput).toMatchInlineSnapshot(
      '"<!DOCTYPE html PUBLIC \\"-//W3C//DTD XHTML 1.0 Transitional//EN\\" \\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\\"><td data-id=\\"__react-email-column\\">Lorem ipsum</td>"',
    );
  });
});
