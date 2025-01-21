const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" },
    [
         React.createElement("h1", {}, "This is a H1 tag"),
         React.createElement("h2", {}, "This is a H2 tag")

]))


// const heading = React.createElement("h1", { id: "heading" }, "Hello From React");

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent)
root.render(parent)