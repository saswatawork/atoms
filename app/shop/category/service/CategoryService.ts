
const CATEGORY_API_PATH = "https://fakestoreapi.com/products/categories"

export const getCategories = async () => {
    try {
        const categories = await fetch(CATEGORY_API_PATH);
        return categories.json();
    } catch (error: any) {
        throw new Error(error);
    }
}

