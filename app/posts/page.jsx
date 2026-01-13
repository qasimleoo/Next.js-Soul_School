"use client";

import { useContext, useEffect, useState } from "react";
import { TestContext } from "../context/TestingContext";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    const { isDark, toggleDarkTheme } = useContext(TestContext);

    useEffect(() => {
        async function fetchPosts() {
            // fetch("https://jsonplaceholder.typicode.com/posts")
            //     .then((data) => data.json())
            //     .then(setPosts(data));

            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts?_limit=1"
            );
            const data = await response.json();
            setPosts(data);
        }
        fetchPosts();
    }, []);

    console.log(posts);

    return (
        <>
            <button onClick={toggleDarkTheme}>
                Switch to {isDark ? "Light" : "Dark"}
            </button>

            <h1>Posts: </h1>
            <ul>
                {posts &&
                    posts.map(({ id, title, body }) => (
                        <li key={id}>
                            <div>
                                {id} {title} {body}
                            </div>
                            <br />
                        </li>
                    ))}
            </ul>
        </>
    );
};

export default Posts;
