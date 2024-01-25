import { useEffect, useState } from "react";
import { CategoryType } from "../type";
import { getCategories } from "../service";

export const useCategories = () => {
    const [categories, setCategories] = useState<Array<CategoryType>>([]);

    useEffect(() => {
        (async () => {
            const categories = await getCategories()
            setCategories(categories)
        })();
    }, [])

    return { categories };
}