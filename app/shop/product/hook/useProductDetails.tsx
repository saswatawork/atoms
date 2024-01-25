import { useEffect, useState } from "react";
import { ProductType, getProductDetails } from "..";

export const useProductDetails = (id: string) => {
    // ToDo: Update the default value implementation
    const [productDetails, setProductDetails] = useState<ProductType>({ id: 0, category: '', image: '', description: '', price: 0, rating: { count: 0, rate: 5 }, title: '' });

    useEffect(() => {
        (async () => {
            const product = await getProductDetails(id);
            setProductDetails(product)
        })();
    }, [])

    return { productDetails };
}