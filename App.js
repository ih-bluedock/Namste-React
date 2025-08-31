import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTMLElement(render)
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abcd" },
  "Hello world from React!"
);

console.log(heading);

// JSX => React.createElement => ReactElement-JS Object => HTMLElement
const jsxHeading = <h1 id="heading">Namste React using JSX</h1>;

console.log(jsxHeading);

const spanElement = <span>this is span</span>

const Title = () => <h1>{spanElement} Namste React Title Component</h1>;

const HeadingComponent = () => (
  <div className="container">
    <Title />
    <Title></Title>
    {Title()}
    {jsxHeading}
    <h1 className="heading">Namste React Heading Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
