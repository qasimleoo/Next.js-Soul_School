import axios from "axios";

export async function getAccessToken() {
    const url = `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}/oauth2/v2.0/token`;

    const params = new URLSearchParams();
    params.append("client_id", process.env.AZURE_CLIENT_ID);
    params.append("client_secret", process.env.AZURE_CLIENT_SECRET);
    params.append("grant_type", "client_credentials");
    params.append("scope", "https://graph.microsoft.com/.default");

    console.log({
        tenant: process.env.AZURE_TENANT_ID,
        client: process.env.AZURE_CLIENT_ID,
        secret: !!process.env.AZURE_CLIENT_SECRET,
    });

    const res = await axios.post(url, params, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });

    return res.data.access_token;
}
