import Properties from "./props/props"
import ReactHook from "./hooks/page"
import About from "./about/page"
import Link from "next/link";

export default function Home() {
  
  const userDet = {
    fullName: "Sadia Shabir",
    age: 20
  }

  return (
    <div>
      <Properties usr = {userDet} />
      <br />
      <Link href={"/hooks"}>Hooks</Link> 
      <br />

      <Link href={"/about"}>About</Link>
    </div>
  );                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
}
