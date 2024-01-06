import { ReactNode } from "react"
import "./ProductList.scss"

export const ProductList = ({ children }: { children: ReactNode | ReactNode[] }): JSX.Element => {
    return (
        <div className="product-list">
            {children}
        </div>
    )
}