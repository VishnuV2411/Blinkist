import { cleanup, render, screen } from "@testing-library/react";
import SearchIcon from "../SearchIcon";

afterEach(cleanup);
test("Testing SearchIcon",()=>{
    render(<SearchIcon/>);
    expect(screen.getByTestId("searchIcon")).toBeInTheDocument();
});