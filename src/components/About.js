import UserClass from "./UserClass";
import User from "./User";
import React from "react"
class About extends React.Component{

    constructor(props){
        super(props)
        console.log("About constructor is called");
    }
    componentDidMount(){
        console.log("About componentDidMount is called");
    }
    render(){
        console.log("About render is called");
            return (
        <div>
            <h1>About</h1>
            <h2>Your favourite Food Ordering APP:</h2>
            <UserClass name="Ajitesh"/>
            <User name="Ajitesh Mandal"/>
        </div>
    );
    }
}

// const About=()=>{
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>Your favourite Food Ordering APP:</h2>
//             <UserClass name="Ajitesh"/>
//             <User name="Ajitesh Mandal"/>
//         </div>
//     );
// }
export default About;