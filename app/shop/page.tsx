"use client"

import "./ShopHome.scss"
import { Categories, CategoryList } from "./category"
import { BestSellingProducts, OurProducts, ProductBanner } from "./product"

export default function ShopHome() {
  return (
    <div className="home-container">
      <section className="product-menu">
        <CategoryList />
        <ProductBanner />
      </section>

      <BestSellingProducts />
      <Categories />
      {/* <FlashSale /> */}
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
