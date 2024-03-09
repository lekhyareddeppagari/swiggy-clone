import {useState} from "react";
const User = (props) =>{
    const {name}=props;
    const [count1]=useState(2)
    return(
        <div>
            <h1>{name}</h1>
            <h2>location:pune</h2>
            <h3>{count1}</h3>
        </div>
    )
}
export default User;