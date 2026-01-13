import { useState } from "react";

function UserEditor() {
    const [user, setUser] = useState({ name: "Ali", age: 20 });
    const [keyInput, setKeyInput] = useState("");
    const [valueInput, setValueInput] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!keyInput) return;
        setUser({ ...user, [keyInput]: valueInput });
        setKeyInput("");
        setValueInput("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    value={keyInput}
                    onChange={(e) => setKeyInput(e.target.value)}
                    placeholder="Enter a Key"
                />
                <input
                    value={valueInput}
                    onChange={(e) => setValueInput(e.target.value)}
                    placeholder="Enter a Value"
                />
                <button type="submit">Add</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(user).map(([key, value]) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{String(value)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserEditor;
