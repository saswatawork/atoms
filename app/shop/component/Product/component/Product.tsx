import Image from 'next/image';
import Product1 from "@/app/icons/produc1.svg";
import Eye from "@/app/icons/eye.svg";
import Love from "@/app/icons/love.svg";
import "./Product.scss";

export const Product = (): JSX.Element => {
    return (
        <div className="product">
            <div className="product__view">
                <div className="product__view-discount">-40%</div>
                <div className="product__view-image">
                    <Image
                        priority
                        src={Product1}
                        alt="Product 1"
                        layout='responsive'
                    />
                </div>
                <div className="product__view-tools">
                    <Image
                        priority
                        src={Eye}
                        alt="Eye"
                    />
                    <Image
                        priority
                        src={Love}
                        alt="Love"
                    />
                </div>
                <div className="product__view-cart">Add to cart</div>
            </div>
            <div className="product__details">
                <div className="product__details-name">
                    Product name
                </div>
                <div className="product__details-price">
                    <span className="product__details-price-discount">
                        $120
                    </span>
                    <span className="product__details-price-original">
                        $160
                    </span>
                </div>
                <div className="product__details-rating">
                    <span className="product__details-rating-star">★★★★★</span>
                    <span className="product__details-rating-user">(80)</span>
                </div>
            </div>
        </div>
    )
}