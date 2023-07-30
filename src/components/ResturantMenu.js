import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { json } from "react-router-dom";
import { useParams } from "react-router-dom";
const ResturantMenu = ()=>{
    const [resInfo,setResInfo]=useState(null);
    const {resId}=useParams();
    console.log(resId);
    useEffect(()=>{fetchMenu()},[]);
    const  fetchMenu=async ()=>{
       const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
       const jsonData=await data.json(); 
       setResInfo(jsonData.data);
    };

    if(resInfo===null)
    {
        return <Shimmer/>
    }
   
    const {name, cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
    const {itemCards}= resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    return (
        <div>
            <h1>{name}</h1>
            <ul>
               <li>{cuisines.join(",")}----{costForTwoMessage} </li> {/* { <li>{cuisines}--{costForTwoMessage}</li> } */}
                <li><h1>Menu</h1></li>
                <ul>
                    {itemCards.map((item)=><li> {item.card.info.name}---{item.card.info.price/100 || item.card.info.defaultPrice/100 }</li>)}
                </ul>
            </ul>
        </div>
    )
}
export default ResturantMenu;