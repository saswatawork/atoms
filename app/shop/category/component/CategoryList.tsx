import { SHOP_PATH } from "@/app/shop/config";
import { getCategories } from "../service/CategoryService";
import { CategoryType } from "../type/CategoryType";
import "./CategoryList.scss";

export const CategoryList = async () => {
    const categories: CategoryType[] = await getCategories();

    return (
        <ul className="category-list">
            <li className='category-list__item'>
                {categories.map(category => (
                    <a href={`${SHOP_PATH}/category/${category.id}`} key={category.id} className="category-list__link">
                        {category.name}
                    </a>
                ))}
            </li>
        </ul>
    );
}