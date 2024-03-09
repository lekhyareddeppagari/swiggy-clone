
import { MENU_URL } from "./constants"
import {useState , useEffect} from "react";

const useRestuarantMenu =(resId) =>{
    //console.log(resId)
    const [resInfo , setInfo]=useState(null)
    useEffect(()=>{fetchData()},[])
    const fetchData= async () => {
        const data=await fetch(MENU_URL+resId)
        
        const json = await data.json();
        //console.log(json)
        setInfo(json?.data)

    }
    return resInfo;
}
export default useRestuarantMenu