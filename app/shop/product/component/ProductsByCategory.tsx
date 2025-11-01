import { Button } from "@/app/core/Button/component/Button";
import { SHOP_PATH } from "../../config";
import { getProductsByCategory } from "../service/ProductService";
import { ProductType } from "../type/ProductType";
import { ProductList } from "./ProductList";
import { Product } from "./Product";

export const ProductsByCategory = async ({ category }: { category: string }) => {
    const products: ProductType[] = await getProductsByCategory(category);

    return (
        <ProductList heading="Category" subHeading={category}>
            {products.map(product => <Product key={product.name} data={product} />)}
            <a href={`${SHOP_PATH}/product`}><Button>View All Products</Button></a>
        </ProductList>
    )
}