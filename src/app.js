import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/Restaurantmenu";
// import { Routes } from "react-router";
import { Outlet } from "react-router";
import { createBrowserRouter, RouterProvider } from "react-router";



const styleCard = {
  backgroundColor: "#f0f0f0",
  color: "red",
};


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  },
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


// const Header = () => (
//   <header className="header">
//     <div className="logo">
//       <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="logo" className="logo" />
//     </div>
//     <div className="search-bar">
//       <input type="text" placeholder="Search..." className="search-bar" />
//     </div>
//     <div className="user-icon">
//       <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="user-icon" className="logo" />
//     </div>
//   </header>
// )


// const heading = React.createElement("h1", {}, "Namaste react using React");

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
//to render component we have to use < />
// root.render(<HeadingComponent2 />);

// const heading = React.createElement("h1", {id:"heading"}, "Hello World from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// <div id="parent">
//     <div id="child">
//         <h1>I am an H1 tag</h1>
//     </div>
// </div>

// nested div in react

// const parent = React.createElement("div", {id:"parent"}, [
//     React.createElement("div", {id:"child"}, [
//         React.createElement("h1", {id:"h1-tag"}, "I am an H1 tag"),
//         React.createElement("h2", {id:"h2-tag"}, "I am an H2 tag"),
//     ]), React.createElement("div", {id:"child"}, [
//         React.createElement("h1", {id:"h1-tag"}, "I am an H1 tag"),
//         React.createElement("h2", {id:"h2-tag"}, "I am an H2 tag"),
//     ]),
// ]);

// JSX => Babel Transpiles it to React.createElement => ReactElement - JS Object => HTML Element(render)
//react ELement
// const jsxHeading = <h1 className="head">Namaste React using jsx 🚀</h1>;

// const HeadingComponent = () => {
//   return <h1 className="heading">Namaste React Functional component </h1>;
// };

//component composition
// const HeadingComponent2 = () => (
//   <div>
//     {jsxHeading}
//     <HeadingComponent />
//     <h1 className="heading">Namaste React Functional component</h1>
//   </div>
// );

// const heading = React.createElement("h1", {}, "Namaste react using React");

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
//to render component we have to use < />
// root.render(<HeadingComponent2 />);

// root.render(heading);

// console.log(parent);
