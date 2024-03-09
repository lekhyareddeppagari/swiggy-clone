import { CDN_URL } from "../utils/constants";

export const  Rescard =(props)=>{
    const {resData}=props;
    console.log(resData)
    const{cloudinaryImageId,name,cuisines,avgRating}=resData?.info;
      return(
          <div className=" bg-gray-50 hover:bg-gray-800 border border-solid border-black m-4 p-4 w-[250px] rounded-lg">
            
                  <img className="rounded-lg" src={CDN_URL+cloudinaryImageId}/>
                  <h1 className="font-bold py-4 text-lg">{name}</h1>
                <h2 >{cuisines}</h2>
                 <h3 >{avgRating}</h3>
              <h4 >38 Minutes</h4>
              
  
          </div>
      )
  }

  export  const withPromotedLabel = (ResCard)=>{
    return(props)=>{
        return(
            <div>
                <label>Promoted</label>
                <ResCard {...props}/>
            </div>
        )
    }
  }