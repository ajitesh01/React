import React from "react";
import  ReactDOM  from "react-dom/client";
const elem=<span>React Elemet</span>;
const Title =()=>{
    return (
    <h1 className="head">
       {elem} component learning with JSX
    </h1>
)};

const ReactElementTitle=(
    <h1 className="head">
        component learning with JSX
    </h1>
);

const Number=1000;
const HeadComponent = ()=>(
    <div id="container">
        {console.log("Ajitesh Mandal learning React")}
        <h2>{Number}</h2>
        <Title/>
      {ReactElementTitle}
        <h1>This is component learning</h1>
       
    </div>
    
);
console.log(<HeadComponent/>);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(<HeadComponent/>);
