import { Header } from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("should load header componet with a login button",()=>{
render(
    <BrowserRouter>
<Provider store={appStore}>
<Header />
</Provider>
</BrowserRouter>
)

const loginButton=screen.getByText("login");
expect(loginButton).toBeInTheDocument();


const cartItems=screen.getByText("cart (0)")

expect(cartItems).toBeInTheDocument();
});

test("should convert login to logout",()=>{
    render(
        <BrowserRouter>
    <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
    )
    const loginButton=screen.getByRole("button" , {name:"login"})
    fireEvent.click(loginButton)
    
    const logoutButton=screen.getByRole("button" ,{name:"logout"})
    expect(logoutButton).toBeInTheDocument();
    })