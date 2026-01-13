"use client";

import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export default function ThemeProvider({ children }) {
    // const [isDark, setIsDark] = useState(false);

    // function toggle() {
    //     setIsDark((isDark) => !isDark);
    //     console.log("Clicked");
    // }

    // useEffect(() => {
    //     const stored = sessionStorage.getItem("dark");
    //     if (stored !== null) {
    //         setIsDark(stored === "true");
    //     }
    // }, []);

    // useEffect(() => {
    //     sessionStorage.setItem("dark", isDark);
    //     if (isDark) document.documentElement.classList.add("darkMode");
    //     else document.documentElement.classList.remove("darkMode");
    // }, [isDark]);

    return (
        <ThemeContext.Provider value={{ isDark, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
}
