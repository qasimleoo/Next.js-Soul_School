"use client"

import { useState } from "react"

export default function ReactHook(){
    const [count, setCount] = useState(0)
    return(
        <>
        <h3>Count: {count}</h3>
        <div>
            <button onClick={() => setCount(count + 1)}>Increment</button> <hr />
        </div>

        <div>
            <button onClick={() => setCount(count - 1)}>Decrement</button> <hr />
        </div>

        <div>
            <button onClick={() => setCount(0)}>Reset</button>
        </div> <hr />

        <TextInput />
        </>
    )
}

export function TextInput() {
 const [text, setText] = useState("");
  
   return (
       <>
           <input
               type="text"
               value={text}
               onChange={(e) => setText(e.target.value)}
           />
           <p>You typed: {text}</p>
       </>
   );
}