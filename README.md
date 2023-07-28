#React Course
#parcel work
1. Dev Build
2. Local server
3. HMR(Hot Module Replacement)
4. File Watching Algorithm written in C++.(keeps an eye to check if any files check and as soon as parcel found any changes it build again by parcel)
5. Caching (faster build if you changes the files very frequently, check parcel cache directory) 
6. Image Optimization .
7. Minification & bundling & compression for production build . 
8. It uses consistent Hashing 
9. Code Spliting 
10. Differential Bundling (for supporting different browser , apps run older browser even)
11. Diagnostic & error handling capabilities
12. Https support 
13. Tree Shaking .remove unused code and compression
14. Transpilation
15. Different Dev & prod build.
#parcel is beast
For better understanding please https://parceljs.org/docs/

How do you create a prod build ?
npx parcel build index.html-- is used for production build  (create 3 files under dict folder ,minification )
npx parcel index.html -->is used for development build 


npm run start/npm start -> it will run npx pacel index.html , it can be done through package.json inside scripts tag
similarly npm build/npm run build ----for production build ,because this it is configured on package.json


JSX Element=>Parcel=>Babel
JSX is not html inside Js file, JSX is html like syntax
Does Browser understand of JSX statement?---NO,beacuse JSx is not js script ,js engine does not understand jsx.
JSx statements trnaspiled(this code converted to js-react code ) before it reaches to JS engine.
who is trnaspiling the JSX code ? parcel is doing .
parcel gives reponsibility to Babel for transpiling job.
JSX code tranfored to React.CreateElement() which return a react object which passed to HtmlElement().
JSX=>React.CreateElemt=>ReactElement-JS Object=>HtmlElement(render)
Babel is converting JSX to React.CreateElemt
to see the output of JSX , just go to babel official site and put some jsx tag , see the result.

React Component:
1. Class Based Component (its older way of writing code)
2. Functional Component (its just a normal JS function)
whenever you create a functional component , declear the componet with Capital letter.its react way to understand its function component.







//JSX->React.CreateElemt=>ReactElement-JS Object=>HtmlElemnt()
