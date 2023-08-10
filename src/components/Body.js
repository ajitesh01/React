import ResturentCard from "./ResturentCard";
import resObj from "../util/mockData";
import {useState,useEffect} from "react";
import Shimmer  from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../util/useOnlineStatus";
const Body = ()=>{
    const [listOfResturant,setListOfResturant]=useState([]);
    const [filteredResturant,setFilteredResturant]=useState([]);
    const [searchText,setSearchText]=useState([]);
    
    
    
    useEffect(()=>{fetchData()},[]);
    const  fetchData=async ()=>{
       const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       const jsonData=await data.json(); 
       console.log("dhdh");
      setListOfResturant(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredResturant(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false)
    {
        return <h1>Hello Internet problem!</h1>;
    }

    if(listOfResturant.length===0){
        return <Shimmer/>
    }
    return(
        <div className="body">
        <div className="flex">
            <div className="px-5 m-3 border-x-cyan-950">
                <input type="text" className="border border-solid border-blue-800" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                <button className="px-4 bg-green-200 mx-4 rounded-full" onClick={()=>{
                  const  filteredListOfResturents= listOfResturant.filter(resturent=>resturent.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    console.log(searchText);
                    setFilteredResturant(filteredListOfResturents);
                    console.log(listOfResturant);
                    }}>Search</button>
                <button className="px-4  bg-green-200 mx-4 rounded-full" onClick={()=>{
                setFilteredResturant(listOfResturant.filter((res)=>{(res.info.avgRating)>3.6}));
                }}>Top Rated Resturant</button>
                
            </div>

            <div>
           
            </div>
            
            
            
            
          
        </div>
        <div className="flex flex-wrap m-12">
            {filteredResturant.map((resturent,index)=>(
               
                <Link to={"resturant/"+resturent.info.id}> <ResturentCard key={resturent.info.id} resData={resturent}/> </Link>
               
            ))}
       
        </div>
        </div>
    );
};
export default Body;