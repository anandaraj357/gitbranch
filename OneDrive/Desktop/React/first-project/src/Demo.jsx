import React from "react";

function Demo() {
    const element = React.createElement("h1", {className: "greet"}, "Hello, ReactJs");
    const greets=<p>Hello {element}</p>
return(
    <div>
        <p>Hello, ReactJs</p>
        </div>

);
}
export default Demo;