import { render , screen} from "@testing-library/react";
import { Rescard } from "../Rescard";
import MOCK_DATA from  "../mocks/rescardMock.json" ;
import "@testing-library/jest-dom";

test("sholud render Restuarnatcard component with props data" , ()=>{
    render(<Rescard resData={MOCK_DATA}/>);

    const name= screen.getByText("Burger King");
    console.log(name)
    expect(name).toBeInTheDocument();
})