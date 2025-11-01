import Image from 'next/image';
import { getProductDetails } from '../service/ProductService';
import { ProductType } from '../type/ProductType';
import "./ProductDetails.scss";

export async function ProductDetails({ productId }: { productId: string }) {
    const productDetails: ProductType = await getProductDetails(productId);
    const { id, category, image, description, price, rating, name } = productDetails;
    const isRatingObject = (rating: unknown): rating is { count: number; rate: number } =>
        typeof rating === 'object' && rating !== null && 'count' in rating && 'rate' in rating;

    const count = isRatingObject(rating) ? rating.count : 0;
    const rate = isRatingObject(rating) ? rating.rate : 0;


    return (
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
                    <h4>{name}</h4>
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
    )
}