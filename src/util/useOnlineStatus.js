import { useEffect, useState } from "react";

const useOnlineStatus = ()=>{
    const [onlieStatus,setOnlineStatus]=useState(true);
    useEffect(()=>{
    window.addEventListener("offline",()=>{
        console.log("Offline");
        setOnlineStatus(false);
     });
     window.addEventListener("online",()=>{
        console.log("Online");
        setOnlineStatus(true);
     });

    },[]);
    return onlieStatus;
}
export default useOnlineStatus;