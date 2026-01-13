import React from "react";

export const dynamicParams = false;
export const revalidate = 5;

export async function generateStaticParams() {
    // const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
    // const postData = await posts.json();

    // return postData.map(({ id }) => ({
    //     slug: `${id}`,
    // }));

    return [{ slug: "1" }, { slug: "2" }, { slug: "3" }, { slug: "4" }];
}

const page = async ({ params }) => {
    const { slug } = await params;
    console.log(slug);
    return (
        <div>
            Page name is: {slug} <h3>Date: {new Date().toLocaleString()}</h3>
        </div>
    );
};

export default page;
