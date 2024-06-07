const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React!"
);

console.log(heading); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); // render/put heading object inside the id root
// root id ke andar already existing tags replace ho jayenge

/*
 <div id="parent">
        <div id="child">
            <h1>I'm an H1 tag</h1>
            <h2>I'm an H2 tag</h2>
        </div>
</div>

// create an array of children to add siblings i.e., h1 and h2 in the id ="child"

React.createElement(object) on render gets converted to html ==> HTML (Browser Understands)
React.createElement object create krta hai joki render karne pe html me convert hota hai

*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an H1 tag"),
    React.createElement("h2", {}, "I'm an H2 tag"),
  ])
);

console.log(parent); // object
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(parent); //// render/put parent object inside the id root2
// root2 id ke andar already existing tags replace ho jayenge
