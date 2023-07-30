import { useState } from "react";
const User = ({name})=>{
    const [count]=useState(0);
    const [count2]=useState(1);

    return (
        <div className="userCard">
            <h1>Count1:{count}</h1>
            <h1>Count2:{count2}</h1>
            <h2> Name : Ajitesh mandal</h2>
            <h2>Location: West Bengal</h2>
            <h2>gmail: ajiteshmandal@gmail.com</h2>
        </div>
    )
}
export default User;