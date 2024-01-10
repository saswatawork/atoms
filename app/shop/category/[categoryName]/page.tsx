"use client"

import { ProductsByCategory } from "../../product"
import { MainContainer } from "../../shopLayout"

export default function CategoryDeatilsHome({ params: { categoryName } }: { params: { categoryName: string } }) {
    const decodedCategoryName = decodeURI(categoryName);
    return (
        <MainContainer>
            <ProductsByCategory category={decodedCategoryName} />
        </MainContainer>
    )
}