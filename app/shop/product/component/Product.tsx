import Image from 'next/image';
import { Eye, Love, Product1 } from "@/app/core/Icons";
import { SHOP_PATH } from '../../config';
import { ProductType } from '../type/ProductType';
import "./Product.scss";

interface ProductProps {
    data: ProductType
}

export const Product = ({ data }: ProductProps): JSX.Element => {

    const { id, category, image, description, price, rating, name } = data;
    // rating may be undefined coming from backend; provide safe defaults
    const { count = 0, rate = 0 } = (rating as unknown as { count?: number; rate?: number }) ?? {};

    // Guard against missing/empty product image. Next/Image throws when src is empty.
    const imageSrc = (typeof image === 'string' && image.trim().length > 0) ? image : Product1;
    return (
        <div className="product">
            <div className="product__view">
                <div className="product__view-discount">-40%</div>
                <a href={`${SHOP_PATH}/product/${id}`}>
                    <div className="product__view-image">
                        <div className="product__view-image-responsive">
                            <Image
                                priority
                                src={imageSrc}
                                alt={name ?? "Product"}
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </div>
                </a>
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
                    {name}
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