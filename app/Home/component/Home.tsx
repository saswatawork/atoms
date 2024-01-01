import Image from 'next/image';
import { Button } from "@/app/Button";
import Banner from "@/app/icons/banner.svg";
import "./home.scss";

export const Home = (): JSX.Element => {
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
                Flash Sale
            </section>

            <section className="categories">
                Categories
            </section>

            <section className="best-selling-products">
                Best Selling Products
            </section>

            <section className="promotional-products">
                Promotional products
            </section>

            <section className="our-products">
                Our products
            </section>

            <section className="new-arrival">
                New Arrival
            </section>

            <section className="features">
                Features
            </section>
        </div>
    )
}