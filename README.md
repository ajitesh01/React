/*
Header
    -logo
    -nav item(home,about us)
Body
    -search
    -Restro Container
    -Restro Card
Footer
    -Copyright
    -link
*/

How to pass data to componets ? <br>
Answer is 'props', its like passing a arguments to a function  <br>
what is config driven ui? <br>
Good to know <br>
https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js
<br>
If uniqueu key is not associated with each component , then react will rerender all the components.
supoose all the component has uniquue key , a new component comes with new id, react will find that it is not present in DOM , so react understand its completely new component, react will not rerender old component , it will only render the new components. Its a huge optimization . Need to explore on this topic more .. 

<br>
 {resObj.map((resturent,index)=>(
                <ResturentCard key={index} resData={resturent}/>
))}
<br>
React does not recommend the index as key .
<br>
https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/
there are two types of default import/export.<br>
-------------------------------------------
default import/export
ex: export default ComponentName <br>
import ComponentName from 'path'<br>
---------------------------------------
//Named import/export <br>
export const Component;<br>
import {Component} from 'path';


React utility:
1. useState() ->to generate state variable 
2. UseEffect()
whenever a state variable changes/updates by useState, react will rerender the component

what is virtual DOM?
virtual is representation of actual DOM .
what do you mean of represenataion ?
representation is React.CreateElement() which is an object ---> this virtual DOM .
So Virtual DOM is nothing but JS object ..
what is Diff algorithm?
it finds basically diference between two vitual DOM . and react updates the actual DOM.

what is react fibre?
https://github.com/acdlite/react-fiber-architecture
React is fast because of its Virtual DOM .



How React fectch data from backend? <br>
there are 2 ways to fetch data.
1. Loads -> Api Call ->render it on UI<br>
As soon as page loads we can make an api call , wait for data , once get the data it will render the data on UI .<br>
2. Loads->render on UI -> API call ->Rerender with new data<br>
As soon as page loads , we can render the UI,skeleton  (whatver the data we have), now we can make API call , once the data available again rerender the UI . <br>
2nd Approach is better . (useEffect Hook uses for that).
UseEffect-->as soon as a component is rendered , it will call callback function inside UseEffect function.
whenever 
what is Shimmer UI ?
until page loads completely due to network call or whatever , show fake cards/component

what is optional chaining?
i did not implement this on codebase<br>


if you want ,something should change om component , we should use 'UseState' -- local state variable
<br>
if there is no dependency array , every time a compoent render , useEffect is also gettting called after every render.
<br>
what is there is empty dependency array  for useEffect(()=>{},[])?
useEffect is only called on initial render , just call only once.
what if therere is non empty dependency array?
useEffect is called every time dependency array / content of array updated.

<br>
Never use 'useState' inside if/else condition-->read documentation .

Link component uses to navigate to different URL , benefits is it not reload entire page ..
There are 2 types of routing:
1. Client Side Routing
2. Server Side Routing



How the component is loaded/mounted on webpage? (understanding is important to know internal)
1. interestig to know 
componentDidMount() use case? to make API call .But but Why we do that?-- very important concept.
generally react quickly render the compoent then it call APi , then filled the data inside component rather than first call the api and waiting for the data to be available then render ----> beacuse it is slow.


why function based component over class based component?
when we are invoking  class component ,that means we are instating the class componet ,making new object ---OOOPS concept.
when there are multiple children, same children , react life cycle is not called as expected .... why ?
Follow react life cycle diagram 
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ 
"start": "parcel index.html",
"build": "set BUILD_PATH='./dist' parcel build index.html"















