export default async function HTTP(url, options) {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return await response.json();
    } catch (error) {
        return console.error(`Network error: ${error}`);
    }
}
