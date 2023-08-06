import { useEffect, useState } from "react";
const useResturantMenu =(resId)=>{
    const [resInfo,setResInfo]=useState(null);

     useEffect(()=>{fetchMenu()},[]);
     const  fetchMenu=async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const jsonData=await data.json(); 
        setResInfo(jsonData.data);
     };
     return resInfo;
console.log(resId);
};
export default useResturantMenu;