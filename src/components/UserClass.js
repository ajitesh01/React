import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
           userInfo:{
            name:"Dummy",
            location:"Default"
           }
        }
        console.log("user class constructor called");
    }
   async  componentDidMount(){
        const data = await  fetch("https://api.github.com/users/ajitesh01");
        const json= await data.json();
        console.log("user class  componentDidMount called");
        console.log(json);
        this.setState({userInfo:json});
    }
    componentDidUpdate(){
        console.log("componentDidupdate");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount will update happen when page navigation happen");
    }
    render (){
        console.log("user class  render called");
        const {name}=this.props;
        return (
            <div className={"userCard"}>
            <h2> Name : {this.state.userInfo.name}</h2>
            <h2>Location:{this.state.userInfo.location}</h2>
            <img src={this.state.userInfo.avatar_url}/>
            {/* <h2>cout is :{this.state.count}</h2>
            <button onClick={()=>{this.setState({
                count:this.state.count+1
            })}}></button>
            <h2>Location: West Bengal</h2>
            <h2>gmail: ajiteshmandal@gmail.com</h2> */}
        </div>
        )
    }

}
export default UserClass;