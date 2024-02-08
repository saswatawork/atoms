import { SHOP_API } from "../../config";

const PRODUCT_API_PATH = `${SHOP_API}/product`;

export const getAllProducts = async () => {
    try {
        const data = await fetch(PRODUCT_API_PATH);
        return data.json();
    } catch (error: any) {
        throw new Error(error);
    }
}

export const getOurProducts = async () => {
    try {
        const data = await fetch(`${PRODUCT_API_PATH}?limit=8`);
        return data.json();
    } catch (error: any) {
        throw new Error(error);
    }
}

export const getBestSellingProducts = async () => {
    try {
        const data = await fetch(`${PRODUCT_API_PATH}?limit=4`);
        return data.json();
    } catch (error: any) {
        throw new Error(error);
    }
}

export const getProductsByCategory = async (category: string) => {
    try {
        const data = await fetch(`${PRODUCT_API_PATH}/category/${category}`);
        return data.json();
    } catch (error: any) {
        throw new Error(error);
    }
}

export const getProductDetails = async (id: string) => {
    try {
        const data = await fetch(`${PRODUCT_API_PATH}/${id}`);
        return data.json();
    } catch (error: any) {
        throw new Error(error);
    }
}


