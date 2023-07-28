import { LOGO_URL } from "../util/constant";
const Header = ()=>{
    //logo
    //nav item
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
                </ul>
    
            </div>
        </div>
    );
    };
    export default Header;