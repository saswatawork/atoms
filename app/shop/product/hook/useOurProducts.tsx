import { useEffect, useState } from "react";
import { ProductType, getOurProducts } from "..";

export const useOurProducts = () => {
    const [ourProducts, setOurProducts] = useState<Array<ProductType>>([]);

    useEffect(() => {
        (async () => {
            const products = await getOurProducts()
            setOurProducts(products)
        })();
    }, [])

    return { ourProducts };
}