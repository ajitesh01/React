import { CDN_URL } from "../util/constant";

const ResturentCard=(props)=>{
    const {resData}=props;
    return(
        <div className="p-4 w-[200px] m-4 inline-block h-[480px] rounded-lg  bg-gray-100 hover:bg-gray-200" >
            <img className=" my-3 rounded-lg" src={CDN_URL+resData.info.cloudinaryImageId
            }/>
            <h3 className="font-bold py-3 text-lg">{resData.info.name}</h3>
            <h3>{resData.info.areaName}</h3>
            <h3>{resData.info.avgRating}</h3>
            <div className=" break-words">
            { <h3 >{resData.info.cuisines.join(',')
}</h3> }
            </div>
          
        </div>
    );
};

export default ResturentCard; 