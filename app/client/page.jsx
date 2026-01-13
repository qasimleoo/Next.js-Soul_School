// "use client";

// import { useState } from "react";

const ClientCounter = () => {
    // const [count, setCount] = useState(0);

    return (
        <div style={{ border: "2px solid blue", padding: "10px" }}>
            <h3>Client Component</h3>
            <p>Count: </p>
            {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
        </div>
    );
};

// console.log(ClientCounter());

// const real = document.createElement("h1");
const virtual = <h1>Hehe</h1>;
// console.log(real);
// console.log(virtual);

export default ClientCounter;
