import React from "react";
import  ReactDOM  from "react-dom/client";
/*const heading =React.createElement("h1",{id:"heading"},"Hello World");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(heading);*/

//JSX Element=>Parcel=>Babel
//JSX->React.CreateElemt=>ReactElement-JS Object=>HtmlElemnt()
const jsxheading =<h1 id="heading"> Jsx Learning </h1>
const root=ReactDOM.createRoot(document.getElementById("root"));
console.log(jsxheading);
root.render(jsxheading);
//heading & jsxHeading is same thing , check console output
