import { useEffect, useState } from "react";
import { ProductType, getProductsByCategory } from "..";

export const useProductsByCategory = (category: string) => {
    const [products, setProducts] = useState<Array<ProductType>>([]);

    useEffect(() => {
        (async () => {
            const products = await getProductsByCategory(category)
            setProducts(products)
        })();
    }, [])

    return { products };
}