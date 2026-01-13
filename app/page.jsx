"use client";

import { useContext } from "react";
import { TestContext } from "./context/TestingContext";

export default function Home() {
    const { isDark, toggleDarkTheme } = useContext(TestContext);

    console.log(isDark);

    return (
        <div>
            <h1>Homepage</h1>

            <button onClick={toggleDarkTheme}>Change Theme</button>
        </div>
    );
}
