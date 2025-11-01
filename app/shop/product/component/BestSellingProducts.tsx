import { getBestSellingProducts } from "../service/ProductService";
import { ProductType } from "../type/ProductType";
import { Product } from "./Product";
import { ProductList } from "./ProductList";


export const BestSellingProducts = async () => {
    const products: ProductType[] = await getBestSellingProducts();

    return (
        <ProductList heading="This Month" subHeading="Best Selling Products">
            {products.map(product => <Product key={product.name} data={product} />)}
        </ProductList>
    )
}