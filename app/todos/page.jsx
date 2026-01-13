async function customFetch(url) {
    const response = await fetch(url);
    return await response.json();
}

const page = async () => {
    // const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    // const todos = await response.json();

    // const data1 = await fetch("https://procodrr.vercel.app/?sleep=1000");
    // const slow1 = await data1.json();

    // const data2 = await fetch("https://procodrr.vercel.app/?sleep=2000");
    // const slow2 = await data2.json();

    // const data3 = await fetch("https://procodrr.vercel.app/?sleep=3000");
    // const slow3 = await data3.json();

    // console.log(todos);
    // console.log(slow1);
    // console.log(slow2);
    // console.log(slow3);

    const allInOne = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/todos"),
        fetch("https://procodrr.vercel.app/?sleep=1000"),
        fetch("https://procodrr.vercel.app/?sleep=2000"),
        fetch("https://procodrr.vercel.app/?sleep=3000"),
    ]);

    const [todosData, data1, data2, data3] = allInOne;
    // console.log(todosData, data1, data2, data3);

    const [todos, slow1, slow2, slow3] = await Promise.all([
        todosData.json(),
        data1.json(),
        data2.json(),
        data3.json(),
    ]);

    console.log(todos, slow1, slow2, slow3);

    return (
        <div>
            {/* <Suspense fallback="Loading Todos list...">
                {todos &&
                    todos.map(({ id, completed, title }) => (
                        <div key={id}>
                            <input
                                type="checkbox"
                                checked={completed}
                                readOnly
                            />
                            <span className="ml-2">{title}</span>
                        </div>
                    ))}
            </Suspense>

            <Suspense fallback="<div>Loading Slow 1...</div>">{slow1}</Suspense>
            <Suspense fallback="<div>Loading Slow 2...</div>">{slow2}</Suspense>
            <Suspense fallback="<div>Loading Slow 3...</div>">{slow3}</Suspense> */}
        </div>
    );
};

export default page;
