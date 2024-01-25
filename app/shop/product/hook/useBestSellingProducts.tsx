import { useEffect, useState } from "react";
import { ProductType, getBestSellingProducts } from "..";

export const useBestSellingProducts = () => {
    const [products, setProducts] = useState<Array<ProductType>>([]);

    useEffect(() => {
        (async () => {
            const products = await getBestSellingProducts();
            setProducts(products)
        })();
    }, [])

    return { products };
}