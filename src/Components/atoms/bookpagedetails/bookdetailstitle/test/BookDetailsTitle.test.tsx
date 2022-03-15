import { render, screen } from "@testing-library/react";
import BookDetailsTitle from "../BookDetailsTitle";

it("Testing BookDetailsTitle",()=>{
    render(<BookDetailsTitle />);
    const title = screen.getByText("Beyond Entrepreneurship 2.0");
    expect(title).toBeInTheDocument();
});