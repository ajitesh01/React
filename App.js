import React from "react";
import  ReactDOM  from "react-dom/client";
const Title =()=>(
    <h1 className="head">
        component learning with JSX
    </h1>
);
const HeadComponent = ()=>(
    <div id="container">
        <Title/>
        <h1>This is component learning</h1>
       
    </div>
    
);
console.log(<HeadComponent/>);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(<HeadComponent/>);
