import Image from 'next/image';
import { Eye, Love } from "@/app/core/Icons";
import "./Product.scss";
import { ProductType } from '..';

interface ProductProps {
    data: ProductType
}

export const Product = ({ data }: ProductProps): JSX.Element => {

    const { category, image, description, price, rating: { count, rate }, title } = data;
    return (
        <div className="product">
            <div className="product__view">
                <div className="product__view-discount">-40%</div>
                <div className="product__view-image">
                    <div className="product__view-image-responsive">
                        <Image
                            priority
                            src={image}
                            alt="Product 1"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
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
                    {title}
                </div>
                <div className="product__details-price">
                    <span className="product__details-price-discount">
                        ${price}
                    </span>
                    <span className="product__details-price-original">
                        ${price}
                    </span>
                </div>
                <div className="product__details-rating">
                    <span className="product__details-rating-star">★★★★★</span>
                    <span className="product__details-rating-user">({count})</span>
                </div>
            </div>
        </div>
    )
}