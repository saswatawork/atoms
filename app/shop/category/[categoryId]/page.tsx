import { ProductsByCategory } from "@/app/shop/product/component/ProductsByCategory";
import { MainContainer } from "../../shopLayout/component/MainContainer";

export default function CategoryDeatilsHome({ params: { categoryId } }: { params: { categoryId: string } }) {
    return (
        <MainContainer>
            <ProductsByCategory category={categoryId} />
        </MainContainer>
    )
}