
const PRODUCT_API_PATH = "https://fakestoreapi.com/products"

export const getAllProducts = async () => {
    try {
        const allProducts = await fetch(PRODUCT_API_PATH);
        return allProducts.json();
    } catch (error: any) {
        throw new Error(error);
    }
}

export const getOurProducts = async () => {
    try {
        const allProducts = await fetch(`${PRODUCT_API_PATH}?limit=8`);
        return allProducts.json();
    } catch (error: any) {
        throw new Error(error);
    }
}

