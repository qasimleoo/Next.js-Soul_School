import { Test } from "./components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body>
        {children}
        {/* <Test /> */}
        {/* <Day5 /> */}
      </body>
    </html>
  );
}

export function Day5 () {
  return <>
    <h1>This is Layout h1</h1>
  </>
}