import { SHOP_PATH } from "@/app/shop/config";
import { Phone } from "@/app/core/Icons";
import { Category } from "./Category";
import { getCategories } from "../service/CategoryService";
import { CategoryType } from "../type/CategoryType";
import "./Categories.scss";

export const Categories = async () => {
    const categories: CategoryType[] = await getCategories();

    return (
        <section className="categories">
            <h2>Categories</h2>
            <h3>Browse By Categories</h3>
            <div className='categories__items'>
                {categories.map(category => (
                    <a href={`${SHOP_PATH}/category/${category.id}`} key={category.id} className="categories__link">
                        <Category name={category.name} icon={Phone} />
                    </a>
                ))}
            </div>
        </section>
    );
}