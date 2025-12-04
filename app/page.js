import { Test } from "./components/Navbar";
import { Day5 } from "./layout";

export function Testing() {
  return (    
    <div>
      <h1>This is h1</h1>

    </div>
  );
}

export function Testing1 () {
  return <div>
      <h1>This is h2</h1>

    </div>
}

export default function Testing2 () {


  return <div>
      <h1>This is h3</h1>
      <Testing />
      <Testing1 />
      <Test />
      <Day5 />
    </div>
}