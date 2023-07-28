import { CDN_URL } from "../util/constant";
const ResturentCard=(props)=>{
    const {resData}=props;
    console.log(resData.info);

    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" src={CDN_URL+resData.info.cloudinaryImageId
}/>
            <h3>{resData.info.name}</h3>
            <h3>{resData.info.areaName}</h3>
            <h3>{resData.info.avgRating}</h3>
           <h3>{resData.info.cuisines.join(',')
}</h3>
        </div>
    );
};

export default ResturentCard; 