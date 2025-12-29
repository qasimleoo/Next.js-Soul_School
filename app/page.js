import User from "./props/props"
import Counter from "./Hooks/user"

export default function Home() {
  
   let userobject = {
    name: "Rabia",
    city: "Lahore"
   }
   return<>
   <Home1 />
   <Counter />
   <User user={userobject}/>
   </>
  }

  import Block from "./block/block"
export function Home1() {
   let blockobject = {
      grade: "Five",
      section: "Red",
      students: 25
   }
   return(
   <>
     <Block block={blockobject}/>
   </>
   )
}


  
  