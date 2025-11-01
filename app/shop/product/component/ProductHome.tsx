import { ProductType } from "../type/ProductType";
import { getAllProducts } from "../service/ProductService";
import { Product } from "./Product";
import { ProductList } from "./ProductList";

export const ProductHome = async () => {
    const allProducts: Array<ProductType> = await getAllProducts();

    return (
        <ProductList heading="Products" subHeading="Browse All Products">
            {allProducts.map(product => <Product key={`${product.id} - ${product.name}`} data={product} />)}
        </ProductList>
    )
}