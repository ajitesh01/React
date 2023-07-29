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

what is Shimmer UI ?
until page loads completely due to network call or whatever , show fake cards/component

what is optional chaining?
i did not implement this on codebase











