export default async (url, options) => {
    const response = await fetch(url, options);
    let json;
    try {
        json = await response.json();
    } catch (e) {
        json = null;
    }
    if (!response.ok) {
        return Promise.reject({
            ok: response.ok,
            error: json,
            status: response.status,
            statusText: response.statusText
        });
    }
    return {
        ok: response.ok,
        data: json,
        status: response.status,
        statusText: response.statusText
    };
}