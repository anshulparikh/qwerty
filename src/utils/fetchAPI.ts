const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_SITE_API;

// async function fetchAPI(query, { variables } = {}) {
export async function fetchAPI(query) {
    const headers = { "Content-Type": "application/json" };

    if (process.env.WORDPRESS_AUTH_TOKEN) {
        // headers["Authorization"] = `Bearer ${process.env.WORDPRESS_AUTH_TOKEN}`;
        headers["Authorization"] =
            "Basic cGFyYW1qaXRAdHJ1LmFnZW5jeTpnb3FhIEtKcnggQWpRMyBaUThDIGZEWXUgR09xSg==";
    }

    const res = await fetch(API_URL, {
        method: "POST",
        headers,
        body: JSON.stringify({
            query,
            // variables,
        }),
    });

    // process.exit(1);
    const json = await res.json();
    if (json.errors) {
        console.error(json.errors);
        throw new Error("Failed to fetch API");
    }

    return json.data;
}
