import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MyLibrary from "../MyLibrary";

afterEach(cleanup);
test("Testing MyLibrary",()=>{
    render(<MemoryRouter><MyLibrary/></MemoryRouter>);
    expect(screen.getByTestId("library")).toBeInTheDocument();
});