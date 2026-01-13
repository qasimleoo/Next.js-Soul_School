export async function Comments({ children }) {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    return <div>Total {children}</div>;
}
