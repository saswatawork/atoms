import { Product, ProductList } from "."
import { useBestSellingProducts } from "..";

export const BestSellingProducts = (): JSX.Element => {
    const { products } = useBestSellingProducts();

    return (
        <ProductList heading="This Month" subHeading="Best Selling Products">
            {products.map(product => <Product key={product.title} data={product} />)}
        </ProductList>
    )
}