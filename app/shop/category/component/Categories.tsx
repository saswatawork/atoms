import { SHOP_PATH } from "@/app/shop/config";
import { Phone, Computer, SmartWatch, Camera, HeadPhone, Gaming } from "@/app/core/Icons";
import { Category } from "./Category";
import { useCategories } from "../hook";
import "./Categories.scss";

export const Categories = (): JSX.Element => {
    const { categories } = useCategories()

    return (
        <section className="categories">
            <h2>Categories</h2>
            <h3>Browse By Categories</h3>
            <div className='categories__items'>
                {categories.map(category => (
                    <a href={`${SHOP_PATH}/category/${category}`}>
                        <Category name={category} icon={Phone} />
                    </a>
                ))}
            </div>
        </section>
    );
}