import { useEffect, useState } from "react";

function UsersTable() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // const start = Date.now();

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                // const elapsed = Date.now() - start;
                // const delay = Math.max(800 - elapsed, 0);

                // setTimeout(() => {
                setUsers(data);
                setLoading(false);
                // }, delay);
            });
    }, []);

    if (loading) {
        return <div className="loader">Loading data…</div>;
    }

    return <div>{users.length} users loaded</div>;
}

export default UsersTable;
