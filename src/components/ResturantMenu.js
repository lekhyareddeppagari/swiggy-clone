
import useRestuarantMenu from "../utils/useResturantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import ResCategory from "./ResCategory";
import { useState } from "react";


const ResturantMenu = () =>{
    
    const {resId}=useParams();
    const resInfo=useRestuarantMenu(resId);
    const [showItems,setShowItems] =useState(null);
    //console.log(resInfo)

    
    if(resInfo===null) return (<Shimmer />);
    const {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
    const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const category=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>
    c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    //console.log(itemCards)
    return(
        <div className="text-center">
           <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")}-{costForTwoMessage}</p>
            {
                category.map((eachCategory ,index)=>(
                   
                    <ResCategory 
                    key={eachCategory?.card?.card.title} 
                    data={eachCategory?.card?.card}
                    showIndex={index=== showItems ? true :false}
                    setShowItems={()=>setShowItems(index)}/>
                ))
            }

    
        </div>
    )
}
export default ResturantMenu