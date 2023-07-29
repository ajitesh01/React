import { CDN_URL } from "../util/constant";

const ResturentCard=(props)=>{
    const {resData}=props;
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" src={CDN_URL+resData.info.cloudinaryImageId
}/>
            <h3>{resData.info.name}</h3>
            <h3>{resData.info.areaName}</h3>
            <h3>{resData.info.avgRating}</h3>
            <div className="cuisine">
            <h3 >{resData.info.cuisines.join(',')
}</h3>
            </div>
          
        </div>
    );
};

export default ResturentCard; 