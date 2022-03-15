import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { BannerImage } from "../BannerImage";

it("Testing BannerImage", ()=> {
    render(
        <MemoryRouter>
            <BannerImage />
        </MemoryRouter>
    );
    expect(screen.getByTestId("BannerImage")).toBeInTheDocument();
})