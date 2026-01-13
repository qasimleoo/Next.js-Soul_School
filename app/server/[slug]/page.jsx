const Slug = async ({ params }) => {
    const { slug } = await params;

    if (slug % 2 === 0) {
        throw new Error("Page id should be an odd number.");
    }

    return <div>Slug {slug}</div>;
};

export default Slug;
