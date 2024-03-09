import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemListMenu = ({item}) =>{
    const dispatch=useDispatch();

    const handleAddItems= (eachItem)=>{
        dispatch(addItem(eachItem))

    }
    return(
        <div>
            {item.map((eachItem) => (
                    <div 
                    key={eachItem.card.info.id}
                    className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                     <div className="w-9/12"> 
                     <div className="py-2">
                        <span >{eachItem.card.info.name}</span>
                        <span>
                            - ₹ 
                            {eachItem.card.info.price ?
                            eachItem.card.info.price/100:
                            eachItem.card.info.defaultPrice/100}
                        </span>
                        </div>
                            <p className="text-xs">{eachItem.card.info.description}</p>
                        </div>
                        <div className="w-3/12 p-4">
                        <div className="absolute">
                        <button className="p-2 mx-16 rounded-lg bg-black text-white" onClick={()=>handleAddItems(eachItem)}>
                            ADD+
                        </button>
                        </div>
                        <img src={CDN_URL + eachItem.card.info.imageId} className="w-full"/>
                        </div>
                     </div>   
                   )
                   )
                            }
        </div>


    );
};

    

export default ItemListMenu