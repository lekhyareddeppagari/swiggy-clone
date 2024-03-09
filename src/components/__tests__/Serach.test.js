import MOCK_DATA from "../mocks/resturantMock.json";
import { fireEvent, render , screen } from "@testing-library/react";
import { Body } from "../Body";
import {act} from "react-dom/test-utils";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";


global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        },
    })
})

test ("it shuld render the  body componet with searc",async ()=>{

    await act(async()=>
    render(
    <BrowserRouter>
     <Body/>
    </BrowserRouter>
   ))

    const searchBtn=screen.getByRole("button" , {name: "search"})
  
     
   const serachInput=screen.getByTestId("searchInput") 
    fireEvent.change(serachInput , {target :{value:"burger"}});
    fireEvent.click(searchBtn);
    const cards=screen.getAllByTestId("resCard");
  
   expect(cards.length).toBe(1);
});

test ("it sholud test top rated restuarant",async ()=>{

    await act(async()=>
    render(
    <BrowserRouter>
     <Body/>
    </BrowserRouter>
   ))

    const cardBeforFilter=screen.getAllByTestId("rescard");

  const topratedRes=screen.getByRole("button" , {name: "TopRatedRestuarants"})
  fireEvent.click(topratedRes)
   expect(cards.length).toBe(9);
})