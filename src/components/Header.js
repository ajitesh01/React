import { LOGO_URL } from "../util/constant";
import {useState,useEffect} from "react";
import { Link } from "react-router-dom";
const Header = ()=>{
    //logo
    //nav item
    useEffect(()=>console.log("called after every time"));
    const [btnName,changeBtnName]=useState("Login");
    return (
        <div className="flex justify-between bg-pink-100 shadow-sm m-1">
            <div className="">
                 <img className="w-23" src={LOGO_URL}/> 
            </div>
             
            <div className="flex items-center">
                <ul className="flex">
                    <li className="px-3"> <Link to="/"> Home </Link></li>
                    <li className="px-3"><Link to="/contact"> Contact </Link></li>
                    <li className="px-3"><Link to="/about">About Us </Link></li>
                    <button className="login-btn px-3" onClick={()=>{
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