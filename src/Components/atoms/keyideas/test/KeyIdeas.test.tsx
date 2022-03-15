import { cleanup, render, screen } from "@testing-library/react";
import { KeyIdeas } from "../KeyIdeas";

afterEach(cleanup);
test("Testing KeyIdeas",()=>{
    render(<KeyIdeas/>);
    expect(screen.getByTestId("KeyIdeas")).toBeInTheDocument();
});