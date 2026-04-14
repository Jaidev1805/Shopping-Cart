async function API() {
    try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error:", error);
    }
}

export default API;