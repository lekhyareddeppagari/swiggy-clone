import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import UserContext from "../utils/UserContext"
import { useContext, useState } from "react";
import { useSelector } from "react-redux";


export const Header =() =>{
    const [btnName ,setBtnName]=useState("login")

    const cartItems=useSelector((store)=> store.cart.items);



    const {loggedInUser}=useContext(UserContext);
    
    return(
        <div className="flex justify-between h-[120px]  bg-green-100">
            <div>
                <img className=" shadow" src={LOGO_URL}/>
            </div>
            <div className="flex justify-center items-center">
            <ul className="flex font-bold p-4 m-4">
                <li className="px-4 font-bold text-xl"><Link to="/Grocery">Grocery</Link></li>
                <li className="px-4 font-bold text-xl"><Link to="/">Home</Link></li>
                <li className="px-4 font-bold text-xl"><Link to="/about">About</Link></li>
                <li className="px-4 font-bold text-xl"><Link to="/contact">Contact US</Link></li>
                <li className="px-4 font-bold text-xl"><Link to="/cart">cart ({cartItems.length})</Link></li>
                <button className="px-4 font-bold text-xl" onClick={()=>{
                    btnName==="login"? setBtnName("logout"):setBtnName("login") ;
                }}>
                    {btnName}
                </button>
                <li className="px-4 font-bold text-xl">user:{loggedInUser}</li>
        
            
            </ul>
            </div>
        </div>
    )
}