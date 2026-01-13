"use client";

import { createContext, useState } from "react";

export const TestContext = createContext();

const TestingProvider = ({ children }) => {
    // state
    const [isDark, setIsDark] = useState(false);

    // function that updates related state
    const toggleDarkTheme = () => {
        if (isDark) {
            setIsDark(false);
            document.documentElement.style.background = "#fff";
        } else {
            setIsDark(true);
            document.documentElement.style.background = "#000";
        }

        // setIsDark((isDark) => !isDark);

        // true, !true => false
        // false, !false => true
    };

    return (
        <TestContext.Provider value={{ isDark, toggleDarkTheme }}>
            {children}
        </TestContext.Provider>
    );
};

export default TestingProvider;
