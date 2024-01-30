import { User } from "../type";

const USER_API_PATH = "https://fakestoreapi.com/users"

export const addUser = async (user: User) => {
    try {
        const data = await fetch(USER_API_PATH, {
            method: "POST",
            body: JSON.stringify(user)
        });
        return data.json();
    } catch (error: any) {
        throw new Error(error);
    }
}