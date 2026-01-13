import React from "react";

const Todos = async () => {
    const response = await fetch(
        "http://jsonplaceholder.typicode.com/todos?_limit=10",
        {
            // next: {
            //     revalidate: 5000,
            // },
        }
    );
    const todos = await response.json();

    return (
        <div>
            {todos &&
                todos.map(({ id, userId, completed, title }) => (
                    <div key={id}>
                        {/* <span>{userId}</span> */}
                        <input type="checkbox" checked={completed} readOnly />
                        <span className="ml-1">{title}</span>
                    </div>
                ))}
        </div>
    );
};

export default Todos;
