"use client"

import Image from 'next/image';
import { MainContainer } from "../../shopLayout"
import { useProductDetails } from "../hook/useProductDetails"
import { OurProducts, ProductType } from '..';
import "./ProductDetails.scss";

export default function ProductDetailsHome({ params: { productId } }: { params: { productId: string } }) {
    const { productDetails } = useProductDetails(productId);
    const { id, category, image, description, price, rating: { count, rate }, title } = productDetails as ProductType;


    return (
        <MainContainer>
            <div className="product-details">
                <div className="product-details__gallery">
                    <div className="product-details__gallery-thumb">
                        <div className="product-details__gallery-thumb-item">
                            <Image
                                priority
                                src={image}
                                alt="Product 1"
                                width={80}
                                height={70}

                            />
                        </div>
                        <div className="product-details__gallery-thumb-item">
                            <Image
                                priority
                                src={image}
                                alt="Product 1"
                                width={80}
                                height={70}

                            />
                        </div>
                        <div className="product-details__gallery-thumb-item">
                            <Image
                                priority
                                src={image}
                                alt="Product 1"
                                width={80}
                                height={70}

                            />
                        </div>
                        <div className="product-details__gallery-thumb-item">
                            <Image
                                priority
                                src={image}
                                alt="Product 1"
                                width={80}
                                height={70}

                            />
                        </div>
                    </div>
                    <div className="product-details__gallery-main">
                        <Image
                            priority
                            src={image}
                            alt="Product 1"
                            width={300}
                            height={250}

                        />
                    </div>
                </div>
                <div className="product-details__info">
                    <div>
                        <h4>{title}</h4>
                        <div className="product-details__info-rating">
                            <div className="product-details__info-rating-rate">{rate} ({count})</div> |
                            <div className="product-details__info-rating-stock"></div>
                        </div>
                        <div className="product-details__info-price">${price}</div>
                        <div className="product-details__info-desc">
                            {description}
                        </div>
                    </div>
                    <div className="product-attr">
                        <div className="product-attr-colors"></div>
                        <div className="product-attr-size"></div>
                        <div className="product-attr-stock">
                            <div className="product-attr-stock-count"></div>
                            <div className="product-attr-stock-buy"></div>
                            <div className="product-attr-stock-wishlist"></div>
                        </div>

                        <ul className="product-attr-shipping">
                            <li>
                                <div>Icon</div>
                                <div>
                                    <div>Text 1</div>
                                    <div>Text 2</div>
                                </div>
                            </li>
                            <li>
                                <div>Icon</div>
                                <div>
                                    <div>Text 1</div>
                                    <div>Text 2</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <OurProducts />
        </MainContainer>
    )
}