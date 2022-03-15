import { cleanup, render, screen } from "@testing-library/react";
import MyLibHeading from "../MyLibHeading";

afterEach(cleanup);
test("Testing MyLibHeading",()=>{
    render(<MyLibHeading />);
    expect(screen.getByText("My Library")).toBeInTheDocument();
});