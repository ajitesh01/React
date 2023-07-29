import ResturentCard from "./ResturentCard";
import resObj from "../util/mockData";
import {useState,useEffect} from "react";
import Shimmer  from "./Shimmer";
const Body = ()=>{
    const [listOfResturant,setListOfResturant]=useState([]);
    const [filteredResturant,setFilteredResturant]=useState([]);
    const [searchText,setSearchText]=useState([]);
    useEffect(()=>fetchData(),[]);
    const  fetchData=async ()=>{
       const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       const jsonData=await data.json(); 
      setListOfResturant(jsonData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
      setFilteredResturant(jsonData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    };
    if(listOfResturant.length===0){
        return <Shimmer/>
    }
    return(
        <div className="body">
        <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                <button onClick={()=>{
                   filteredListOfResturents= listOfResturant.filter(resturent=>resturent.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    console.log(searchText);
                    setFilteredResturant(filteredListOfResturents);
                    console.log(listOfResturant);
                    }}>Search</button>
                
            </div>
            <button className="filter-btn" onClick={()=>{
                console.log("top rated");
                console.log(listOfResturant);
                setFilteredResturant(listOfResturant.filter((resturent)=>resturent.info.avgRating>4.5));
            }}>Top Rated Resturant</button>
        </div>
        <div className="res-container">
            {filteredResturant.map((resturent,index)=>(
                <ResturentCard key={index} resData={resturent}/>
            ))}
       
        </div>
        </div>
    );
};
export default Body;