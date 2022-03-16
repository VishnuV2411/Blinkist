
import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MainSearch } from "../MainSearch";
afterEach(cleanup);
test("Checking main serach Rendering", () => {
  const { getByTestId } = render(
    <MainSearch search={() => console.log("hello from toolbar header ")} />
  );
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const id = getByTestId("TextField");
  expect(id).toBeInTheDocument();
});
test("Checking OnChange main serach", () => {
  const { getByTestId } = render(
    <MainSearch search={() => console.log("hello from toolbar header ")} />
  );
  // eslint-disable-next-line testing-library/prefer-screen-queries
  fireEvent.change( getByTestId("TextField"));
});