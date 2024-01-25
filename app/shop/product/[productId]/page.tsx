"use client"

import { MainContainer } from "../../shopLayout"
import { BestSellingProducts, ProductDetails } from '..';

export default function ProductDetailsHome({ params: { productId } }: { params: { productId: string } }) {
    return (
        <MainContainer>
            <ProductDetails productId={productId} />
            <BestSellingProducts />
        </MainContainer>
    )
}