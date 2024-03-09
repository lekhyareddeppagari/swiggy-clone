import { Rescard ,withPromotedLabel} from "./Rescard"
import { useEffect, useState,useContext } from "react"
import Shimmer from "./Shimmer";
import ResturantMenu from "./ResturantMenu";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";



export const Body =() =>{
    const [listOfRestuarants , setListOfRestuarants]=useState([]);
    const [searchText , setSearchText]=useState("");
    const [filteredListResults,setFilteredListResults]=useState([]);

    const onlineStatus=useOnlineStatus();
    const RescardPromotedLabel=withPromotedLabel(Rescard);

    const {loggedInUser,setUserName}=useContext(UserContext);

    useEffect(()=>{fetchData()} , []);

    const fetchData = async () => {
        const data = await 
        fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6309399&lng=73.7378149&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
           console.log(json)
            setListOfRestuarants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredListResults(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
             
    }

    if (onlineStatus===false)return (<h1>hey dude u are offline</h1>);
    return (listOfRestuarants.length === 0)?  <Shimmer/>:
    (
        <div data-testid="resCard" className="m-4">
            <div className="search">
                
                <button className="bg-yellow-400 p-3" onClick={()=>{
                    const filteredResults=listOfRestuarants.filter((res)=>res.info.avgRating>=3.9);
                    setListOfRestuarants(filteredResults);
                }}>TopRatedRestuarants</button>
                <input 
                data-testid="searchInput"
                type="text"  className="border rounded-xl border-solid border-black m-3" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}></input>
                    
                <button  
                className="px-4 bg-red-600 m-4" onClick={()=>{
                    const filteredRestuarnts=listOfRestuarants.filter((res)=>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredListResults(filteredRestuarnts)
                    
                }}>search</button>
                  <label >UserName: </label>
                <input className="border border-black p-2"
                value={loggedInUser} onChange={(e)=>{
                    setUserName(e.target.value)
                }}/>
            </div>


                <div className="flex flex-wrap res-container">
                    {
                      filteredListResults.map((eachitem)=>(
                     <Link key={eachitem.info.id} to={"/restaurants/"+eachitem.info.id}> 
                     {
                        eachitem.info.promoted ? 
                        (<RescardPromotedLabel resData={eachitem}/>):
                        (<Rescard resData={eachitem} />)
                     }
                     </Link> )
                     )
                    }
                </div>
            
        </div>
    )
}















