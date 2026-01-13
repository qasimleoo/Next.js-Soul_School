import React from "react";

const page = async ({ params }) => {
    const { catchall } = await params;
    console.log(catchall);
    return <div>Catching routes {catchall.join("/")}</div>;
};

export default page;
