"use client"
import {useState} from "react"
export default function Counter(){
    const [count, setcount] = useState(0);
    return <>
    <button onClick={()=>{setcount(count+1)}}>Click me!</button>
    <p>Count: {count}</p>
    </>
}
