import Image from 'next/image';
import { Banner } from "@/app/core/Icons";
import "./ProductBanner.scss"

export const ProductBanner = () => {
    return (
        <div className="product-banner">
            <Image
                priority
                src={Banner}
                alt="Follow us on Twitter"
                layout='responsive'
            />
        </div>)
}