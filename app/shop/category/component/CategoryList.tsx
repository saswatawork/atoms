import { SHOP_PATH } from "@/app/shop/config";
import { useCategories } from "../hook";
import "./CategoryList.scss";

export const CategoryList = (): JSX.Element => {
    const { categories } = useCategories()

    return (
        <ul className="category-list">
            <li className='category-list__item'>
                {categories.map(category => (
                    <a href={`${SHOP_PATH}/category/${category}`}>
                        {category}
                    </a>
                ))}
            </li>
        </ul>
    );
}