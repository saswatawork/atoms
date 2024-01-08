"use client"

import { MainContainer } from "../../shopLayout"

export default function CategoryDeatilsHome({ params }: { params: { categoryName: string } }) {
    return <MainContainer>My Post: {params.categoryName}</MainContainer>
}