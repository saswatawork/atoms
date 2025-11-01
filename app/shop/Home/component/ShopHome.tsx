import { Categories } from "../../category/component/Categories";
import { CategoryList } from "../../category/component/CategoryList";
import { BestSellingProducts } from "../../product/component/BestSellingProducts";
import { FlashSale } from "../../product/component/FlashSale";
import { OurProducts } from "../../product/component/OurProducts";
import { ProductBanner } from "../../product/component/ProductBanner";
import "./ShopHome.scss";

export const ShopHome = () => {
  return (
    <div className="home-container">
      <section className="product-menu">
        <CategoryList />
        <ProductBanner />
      </section>

      <BestSellingProducts />
      <Categories />
      <FlashSale />
      <OurProducts />

      {/* <section className="new-arrival">
        <h2>New Arrival</h2>
      </section>

      <section className="features">
        <h2>Features</h2>
      </section> */}
    </div>
  )
}