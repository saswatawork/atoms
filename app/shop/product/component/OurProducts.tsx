import { Product, ProductList } from "."
import { useOurProducts } from ".."

export const OurProducts = (): JSX.Element => {
    const { ourProducts } = useOurProducts();

    return (
        <section className="our-products">
            <h2>Our Products</h2>
            <ProductList>
                {ourProducts.map(product => <Product data={product} />)}
            </ProductList>
        </section>
    )
}