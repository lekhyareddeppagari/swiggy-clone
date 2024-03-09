import React, { Suspense, lazy, useEffect,useState } from "react";
import ReactDOM from "react-dom/client";
import { Body } from "./components/Body";
import {Header} from "./components/Header";
import {createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import { About } from "./components/About";
import { Error } from "./components/Error";
import Contact from "./components/Contact";
import ResturantMenu from "./components/ResturantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(()=> import("./components/Grocery"));

const App= () =>{
    const [userName,setUserName]=useState();

    useEffect(()=>{
        const data ={
            name:"lekhya",
        };
        setUserName(data.name);
    },[])
    return(
        <Provider store={appStore}>
            <UserContext.Provider  value={{loggedInUser:userName , setUserName}}>
           <div className="app">
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>
        

        </Provider>
        
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children :[
            {
                path:"/",
                element:<Body />,
            },
            {
                path:"/about",
                element:<About />,
            },
            {
                path: "/contact",
                element:<Contact />,
            },
            {
                path:"/cart",
                element:<Cart />,
            },

            {
                path :"/restaurants/:resId",
                element:<ResturantMenu />,
            },
            {
                path:"/Grocery",
                element:(<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>),
            },

        ],
        errorElement:<Error/>,
        
    },
    
    
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);