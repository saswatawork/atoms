"use client"

import "./ShopHome.scss"
import { Categories } from "./category"
import { BestSellingProducts, FlashSale, OurProducts, ProductBanner, ProductMenus } from "./product"

export default function ShopHome() {
  return (
    <div className="home-container">
      <section className="product-menu">
        <ProductMenus />
        <ProductBanner />
      </section>

      <Categories />
      {/* <FlashSale />
      <BestSellingProducts /> */}
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
