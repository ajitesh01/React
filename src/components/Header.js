import { LOGO_URL } from "../util/constant";
import {useState,useEffect} from "react";
import { Link } from "react-router-dom";
const Header = ()=>{
    //logo
    //nav item
    useEffect(()=>console.log("called after every time"));
    const [btnName,changeBtnName]=useState("Login");
    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL}/>
            
            </div>
            <div className="nav-items">
                <ul>
                    <li> <Link to="/"> Home </Link></li>
                    <li><Link to="/contact"> Contact </Link></li>
                    <li><Link to="/about">About Us </Link></li>
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