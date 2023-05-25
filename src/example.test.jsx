import { SidePanel } from "./components/SidePanel";

test("examples of some things", () => {
  expect(2 + 2).toEqual(4);
});

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
describe("Title render", () => {
  it("empty render", () => {
    act(() => {
      render(<SidePanel />, container);
    });
    expect(container.textContent).toBe("");

    act(() => {
      render(<SidePanel title="sdf" />, container);
    });
    expect(container.textContent).toBe("sdf");

    act(() => {
      render(<SidePanel title="mohito" />, container);
    });
    expect(container.textContent).toBe("mohito");
  });
});
