import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { BannerOne } from "../BannerOne";

it("Testing Banner Data", () => {
    render(<MemoryRouter><BannerOne/></MemoryRouter>)
    expect(screen.getByText("Explore Books on entrepreneurship")).toBeInTheDocument();
});