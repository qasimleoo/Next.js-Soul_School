import TestingProvider from "./context/TestingContext";

import "./globals.css";

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            className="text-2xl flex justify-center items-center h-screen"
        >
            <body>
                <TestingProvider>{children}</TestingProvider>
            </body>
        </html>
    );
}
