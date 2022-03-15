import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import ToolBarHeader from "../ToolBarHeader";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
afterEach(cleanup);
test("Checking header left Rendering", () => {
  render(
    <MemoryRouter>
      <ToolBarHeader
        icon={true}
        handleChange={() => console.log("hello from toolbar header ")}
        // isAuthenticated={false}
      />
    </MemoryRouter>
  );
  expect(screen.getByTestId("ToolBarHeader")).toBeInTheDocument();
});