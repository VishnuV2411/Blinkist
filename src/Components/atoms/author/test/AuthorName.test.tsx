import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AuthorName from "../AuthorName";

it("Testing AuthorName", ()=> {
    render(
        <MemoryRouter>
            <AuthorName authName="abc" />
        </MemoryRouter>
    );
    expect(screen.getByTestId("AuthorName")).toBeInTheDocument();
});