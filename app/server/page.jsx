// Server-side logic (Node.js/Server environment)

import { Comments } from "@/components/Comments";
import { Likes } from "@/components/Likes";
import { Views } from "@/components/Views";
import Link from "next/link";
import { Suspense } from "react";

export const revalidate = 2;
export const dynamic = "force-dynamic";

export default function ServerProfile() {
    const user = { name: "Alex", joinDate: "2024-01-01" };
    console.log("server page");

    // throw new Error("Server Error Example");
    function error() {
        const num = Math.random();
        console.log(num);

        if (num < 0.5) throw new Error("Random number is: " + num);
    }

    return (
        <div style={{ border: "2px solid green", padding: "10px" }}>
            <h3>Server Component</h3>
            <p>User: {user.name}</p>
            <p>Status: Pre-rendered on Server</p>
            <p>DateTime: {new Date().toLocaleString()}</p>

            {/* {error()} */}

            <Suspense fallback={<div>Loading Likes</div>}>
                <Likes />
            </Suspense>
            <Suspense fallback={<div>Loading Comments</div>}>
                <Comments>Comments 10</Comments>
            </Suspense>
            <Suspense fallback={<div>Loading Views</div>}>
                <Views />
            </Suspense>

            <div className="mt-4">
                <Link href={"/server/1"}>Go to Page 1</Link>
                <br />
                <Link href={"/server/2"}>Go to Page 2</Link>
                <br />
                <Link href={"/server/3"}>Go to Page 3</Link>
                <br />
                <Link href={"/server/4"}>Go to Page 4</Link>
                <br />
            </div>
        </div>
    );
}
