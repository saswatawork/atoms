import { Button } from "@/app/core";
import { Product, ProductList } from "."
import { useOurProducts } from ".."
import { SHOP_PATH } from "../../config";

export const OurProducts = (): JSX.Element => {
    const { ourProducts } = useOurProducts();
    console.log({ ourProducts })
    return (
        <ProductList heading="Our Products" subHeading="Explore Our Products">
            {ourProducts.map(product => <Product key={product.title} data={product} />)}
            <a href={`${SHOP_PATH}/product`}><Button>View All Products</Button></a>
        </ProductList>
    )
}