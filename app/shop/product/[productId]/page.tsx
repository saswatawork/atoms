import { MainContainer } from "../../shopLayout/component/MainContainer"
import { BestSellingProducts } from "../component/BestSellingProducts"
import { ProductDetails } from "../component/ProductDetails"

export default function ProductDetailsHome({ params: { productId } }: { params: { productId: string } }) {
    return (
        <MainContainer>
            <ProductDetails productId={productId} />
            <BestSellingProducts />
        </MainContainer>
    )
}