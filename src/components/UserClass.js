import  React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            count :0,
            count1:2,
        }
    }
    render(){
        const {name}=this.props
        const {count,count1}=this.state
        return(
            <div>
                <button onClick={()=>
                    
                    this.setState({
                        count:this.state.count+1,
                    })

                }>Count Increase</button>
                <h1>{name}</h1>
                <h2>location :Hyerabad</h2>
                <h3>count:{count}</h3>
                <h4> count:{count1}</h4>
            </div>
        )
    }

}
export default UserClass;