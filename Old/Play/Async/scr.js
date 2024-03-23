async function fetchProducts() {
    try {
        const responce = await
            fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
        if (!responce.ok) {
            throw new Error(`HTTP error: ${responce.status}`);
        }
        const json = await responce.json();
        console.log(json[0].name);
    } catch (error) {
        console.error(`Could not get products: ${error}`);
    }
}

fetchProducts();