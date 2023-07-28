import ResturentCard from "./ResturentCard";
import resObj from "../util/mockData";
const Body = ()=>{
    return(
        <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            {resObj.map((resturent,index)=>(
                <ResturentCard key={index} resData={resturent}/>
            ))}
       
        </div>
        </div>
    );
};
export default Body;