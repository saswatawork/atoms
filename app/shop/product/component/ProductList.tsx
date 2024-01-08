import { ReactNode } from "react"
import "./ProductList.scss"

interface ProductListProps {
    children: ReactNode | ReactNode[];
    heading?: string;
    subHeading?: string;
}

export const ProductList = ({ children, heading, subHeading }: ProductListProps): JSX.Element => {
    return (
        <section className="product-list">
            {heading && <h2>{heading}</h2>}
            {subHeading && <h3>{subHeading}</h3>}
            <div className="product-list__items">
                {children}
            </div>
        </section>
    )
}