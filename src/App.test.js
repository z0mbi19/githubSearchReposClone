import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("types inside textarea", () => {
  document.body.id = "seach";

  userEvent.type(screen.getByRole("input"), "react");
  expect(screen.getByRole("input")).toHaveValue("react");
});
