import ResturentCard from "./ResturentCard";
import resObj from "../util/mockData";
import {useState} from "react";
const Body = ()=>{
    const [listOfResturant,setListOfResturant]=useState(resObj);

   /* let listOfResturant=[
        {
            "info": {
              "id": "23847",
              "name": "Domino's Pizza",
              "cloudinaryImageId": "fjqcvqfgqlw6h0atques",
              "cuisines": [
                "Burgers",
                "American"
              ],
              "avgRating": 4.2        
          }
        },
        {
            "info": {
              "id": "23847",
              "name": "Pizza Hut",
              "cloudinaryImageId": "fjqcvqfgqlw6h0atques",
              "cuisines": [
                "Burgers",
                "pakistan"
              ],
              "avgRating": 1.5        
          }
        }
    ]; */


    return(
        <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={()=>{
                
                setListOfResturant(listOfResturant.filter((resturent)=>resturent.info.avgRating>4));
               // listOfResturant=listOfResturant.filter((resturent)=>resturent.info.avgRating>4);
                //console.log(listOfResturant);
            }}>Top Rated Resturant</button>
        </div>
        <div className="res-container">
            {listOfResturant.map((resturent,index)=>(
                <ResturentCard key={index} resData={resturent}/>
            ))}
       
        </div>
        </div>
    );
};
export default Body;