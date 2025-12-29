import User from "@/user/myuser"
import Counter from "./Hooks/hook";

export default function Home() {
   let myObject = {
      name: "muqaddas",
      age: 22
    }
  return (
    <>
    <h1>hi</h1>
    <User mO = {myObject}></User>
    <Counter />
    </>
  )
}
