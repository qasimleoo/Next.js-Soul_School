export const onRequestGet = async () => {
    return new Response(JSON.stringify({ message: "Hello from Cloudflare" }), {
        headers: { "content-type": "application/json" },
    });
};
