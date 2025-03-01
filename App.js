import React from "react";
import ReactDOM from "react-dom/client";




const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },[React.createElement("h1", {}, "This is new Heading"),
        [React.createElement("h2", {}, "I am an H2 tag"),
        React.createElement("h3", {}, "I am an H5 tag")]]));





const heading = React.createElement("h1", { id: "heading" }, "Hello from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);