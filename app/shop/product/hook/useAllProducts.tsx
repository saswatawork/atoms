import { useEffect, useState } from "react";
import { ProductType, getAllProducts } from "..";

export const useAllProducts = () => {
    const [allProducts, setAllProducts] = useState<Array<ProductType>>([]);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            try {
                const products = await getAllProducts();
                setLoading(true);
                setAllProducts(products)
            } catch (error) {
                console.error(error)
            }
        })();
    }, [])

    return { allProducts, isLoading };
}