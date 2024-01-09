import { Product, ProductList, useAllProducts } from "..";

export const ProductHome = (): JSX.Element => {
    const { allProducts } = useAllProducts();

    return (
        <ProductList heading="Products" subHeading="Browse All Products">
            {allProducts.map(product => <Product key={`${product.id} - ${product.title}`} data={product} />)}
        </ProductList>
    )
}