import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { json } from "react-router-dom";
const ResturantMenu = ()=>{
    const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{fetchMenu()});
    const  fetchMenu=async ()=>{
       const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=405798&catalog_qa=undefined&submitAction=ENTER");
       const jsonData=await data.json(); 
       setResInfo(jsonData.data.cards[0].card.card.info);
       //console.log(jsonData.data.cards[0].card.card.info);
      
    };
    console.log(resInfo);
 //   const {name, cuisines, costForTwoMessage}=resInfo?;
    if(resInfo===null)
    {
        return <Shimmer/>
    }
    return (
        <div>
            <h1>{name}</h1>
            <ul>
                {/* <li>{cuisines}--{costForTwoMessage}</li> */}
                <li>Burgers</li>
                <li>Sandwitch</li>
            </ul>
        </div>
    )
}
export default ResturantMenu;