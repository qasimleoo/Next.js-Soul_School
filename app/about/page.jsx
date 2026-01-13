"use client";

import { useState } from "react";
import { useContext } from "react";
import { TestContext } from "../context/TestingContext";

const page = () => {
    const { isDark, toggleDarkTheme } = useContext(TestContext);

    const [fruits, setFruits] = useState(["mango", "apple"]);
    return (
        <div>
            <h1 id="h1">About Page</h1>
            <button
                onClick={() =>
                    /** console.log(object)*/
                    (document.getElementById("h1").innerText = "Hehehehe")
                }
            >
                Click me
            </button>

            <br />
            <br />

            <h2>Fruits:</h2>
            {fruits.map((fruit) => (
                <p key={fruit}>{fruit}</p>
            ))}

            <button onClick={() => setFruits(null)}>Set fruits to null</button>

            <button onClick={toggleDarkTheme}>Change Theme</button>
        </div>
    );
};

export default page;
