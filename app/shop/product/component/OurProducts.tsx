import { Button } from "@/app/core/Button/component/Button";
import { SHOP_PATH } from "@/app/shop/config";
import { ProductType } from "../type/ProductType";
import { getOurProducts } from "../service/ProductService";
import { ProductList } from "./ProductList";
import { Product } from "./Product";

export const OurProducts = async () => {
    const ourProducts: ProductType[] = await getOurProducts();

    return (
        <ProductList heading="Our Products" subHeading="Explore Our Products">
            {ourProducts.map(product => <Product key={product.name} data={product} />)}
            <a href={`${SHOP_PATH}/product`}><Button>View All Products</Button></a>
        </ProductList>
    )
}