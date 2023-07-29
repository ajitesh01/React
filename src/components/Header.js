import { LOGO_URL } from "../util/constant";
import {useState,useEffect} from "react";
const Header = ()=>{
    //logo
    //nav item
    const [btnName,changeBtnName]=useState("Login");
    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL}/>
            
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=>{
                        if(btnName==="Login"){
                            changeBtnName("Logout");
                        }
                        else{
                            changeBtnName("Login");
                        }
                        }}>{btnName}</button>
                </ul>
    
            </div>
        </div>
    );
    };
    export default Header;