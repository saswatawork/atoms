import Image from 'next/image';
import Banner from "@/app/icons/banner.svg";
import { Product } from '@/app/shop/component/Product/component/Product';
import "./ShopHome.scss";

export const ShopHome = (): JSX.Element => {
    return (
        <div className="home-container">
            <section className="product-menu">
                <ul className="product-menu__items">
                    <li><a href="/">Woman’s Fashion</a></li>
                    <li><a href="/">Men’s Fashion</a></li>
                    <li><a href="/">Electronics</a></li>
                    <li><a href="/">Home & Lifestyle</a></li>
                    <li><a href="/">Medicine</a></li>
                    <li><a href="/">Sports & Outdoor</a></li>
                    <li><a href="/">Baby’s & Toys</a></li>
                    <li><a href="/">Groceries & Pets</a></li>
                    <li><a href="/">Health & Beauty</a></li>
                </ul>
                <div className="product-menu__banner">
                    <Image
                        priority
                        src={Banner}
                        alt="Follow us on Twitter"
                        layout='responsive'
                    />
                </div>
            </section>

            <section className="flash-sale">
                <h2>Flash Sale</h2>
                <div className="flash-sale__items">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </section>

            <section className="categories">
                <h2>Browse By Categories</h2>
            </section>

            <section className="best-selling-products">
                <h2>Best Selling Products</h2>
            </section>

            <section className="promotional-products">
                <h2>Promotional products</h2>
            </section>

            <section className="our-products">
                <h2>Our products</h2>
            </section>

            <section className="new-arrival">
                <h2>New Arrival</h2>
            </section>

            <section className="features">
                <h2>Features</h2>
            </section>
        </div>
    )
}