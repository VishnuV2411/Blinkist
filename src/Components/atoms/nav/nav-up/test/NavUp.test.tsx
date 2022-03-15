import { cleanup, render, screen } from "@testing-library/react";
import NavUp from "../NavUp";
afterEach(cleanup);
test("Testing FooterHighlight",()=>{
    render(<NavUp />);
    expect(screen.getByTestId("NavUp")).toBeInTheDocument();
});