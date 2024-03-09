import "@testing-library/jest-dom";
import Contact from "../Contact";
import {render , screen} from "@testing-library/react"

test("should load contact us component" , ()=>{
    render(<Contact />)

    const button =screen.getByText("Submit");

    expect(button).toBeInTheDocument();
});

test("should load 2 input boxes from contact us component" , ()=>{
    render(<Contact />)

    const inputboxes =screen.getAllByRole("textbox");

    expect(inputboxes.length).toBe(2);
})
