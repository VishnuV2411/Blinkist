import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookNote from "../BookNote";


it("Testing BookNote",()=>{
    render(<MemoryRouter>< BookNote/></MemoryRouter>)
    expect(screen.getByTestId("BookNote")).toBeInTheDocument();
});