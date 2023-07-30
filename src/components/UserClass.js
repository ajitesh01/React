import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            count2:1
        }
        console.log("user class constructor called");
    }
    componentDidMount(){
        console.log("user class  componentDidMount called");
    }
    render (){
        console.log("user class  render called");
        const {name}=this.props;
        return (
            <div className={"userCard"}>
            <h2> Name : {name}</h2>
            <h2>cout is :{this.state.count}</h2>
            <button onClick={()=>{this.setState({
                count:this.state.count+1
            })}}></button>
            <h2>Location: West Bengal</h2>
            <h2>gmail: ajiteshmandal@gmail.com</h2>
        </div>
        )
    }

}
export default UserClass;