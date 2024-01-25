import { Button } from "@/app/core";
import { Product, ProductList } from "."
import { useProductsByCategory } from ".."
import { SHOP_PATH } from "../../config";

export const ProductsByCategory = ({ category }: { category: string }): JSX.Element => {
    const { products } = useProductsByCategory(category);

    return (
        <ProductList heading="Category" subHeading={category}>
            {products.map(product => <Product key={product.title} data={product} />)}
            <a href={`${SHOP_PATH}/product`}><Button>View All Products</Button></a>
        </ProductList>
    )
}