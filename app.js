// const heading = React.createElement("h1", {id:"heading"}, "Hello World from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


// <div id="parent">
//     <div id="child">
//         <h1>I am an H1 tag</h1>
//     </div>
// </div>

// nested div in react 
 
const parent = React.createElement("div", {id:"parent"}, [
    React.createElement("div", {id:"child"}, [
        React.createElement("h1", {id:"h1-tag"}, "I am an H1 tag"),
        React.createElement("h2", {id:"h2-tag"}, "I am an H2 tag"),
    ]), React.createElement("div", {id:"child"}, [
        React.createElement("h1", {id:"h1-tag"}, "I am an H1 tag"),
        React.createElement("h2", {id:"h2-tag"}, "I am an H2 tag"),
    ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

console.log(parent);