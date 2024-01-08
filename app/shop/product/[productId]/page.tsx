"use client"

import { MainContainer } from "../../shopLayout"

export default function ProductDetails({ params }: { params: { productId: string } }) {
    return <MainContainer>My Post: {params.productId}</MainContainer>
}