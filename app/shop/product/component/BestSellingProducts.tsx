import { Product, ProductList } from "."

export const BestSellingProducts = (): JSX.Element => {
    return (
        <section className="best-selling-products">
            <h2>Best Selling Products</h2>
            <ProductList>
                <Product />
                <Product />
                <Product />
                <Product />
            </ProductList>
        </section>
    )
}