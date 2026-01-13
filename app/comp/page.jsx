"use client";

import Link from "next/link";

const page = () => {
    console.log("client page");
    if (typeof window !== "undefined") {
        return <div>Hello this is me being hydrated</div>;
    }

    return (
        <div>
            <Link href={"#"}>Link</Link>
            <br />
            <btn onClick={() => console.log("Button clicked")}>Button</btn>
        </div>
    );
};

export default page;
