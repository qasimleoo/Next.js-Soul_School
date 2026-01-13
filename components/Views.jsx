export async function Views() {
    await new Promise((resolve) => setTimeout(resolve, 6000));
    return <div>Views</div>;
}
