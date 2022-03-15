import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BlinkImage from "../BlinkImage";

it("Testing app logo", () => {
    render(<MemoryRouter><BlinkImage/></MemoryRouter>)
    expect(screen.getByAltText("app-logo")).toBeInTheDocument();
});