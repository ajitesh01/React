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