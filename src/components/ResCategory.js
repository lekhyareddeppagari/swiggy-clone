
import ItemListMenu from "./ItemListMenu";

const ResCategory =({data ,showIndex ,setShowItems}) =>{
   // console.log(data)
   
   const handleClick=()=>{
    setShowItems();

   } 
    return(
        <div className="w-6/12 m-auto my-4 bg-gray-50 shadow-lgp-4">
            {/*accordian header*/}
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg">
                {data.title} ({data.itemCards.length})</span>
                </div>
                {/*accordian body*/}
               {showIndex && <ItemListMenu item={data.itemCards}/>} 

        </div>
    )
}
export default ResCategory;