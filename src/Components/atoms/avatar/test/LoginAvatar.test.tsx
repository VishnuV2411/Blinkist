import {render, screen} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LoginAvatar from "../LoginAvatar";

it("Testing Login Avatar", () => {
    render(
        <MemoryRouter>
            <LoginAvatar name="A" />
        </MemoryRouter>
    );
    expect(screen.getByText("A")).toBeInTheDocument();
})