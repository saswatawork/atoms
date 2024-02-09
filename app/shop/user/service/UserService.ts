import { UserData } from "@/app/api/entity/User";
import { SHOP_API } from "../../config";
import { UserLogin } from "../type/UserType";

const USER_API_PATH = `${SHOP_API}/user`

export const addUser = async (user: UserData) => {
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

export const login = async (user: UserLogin) => {
    try {
        const data = await fetch(`${USER_API_PATH}/login`, {
            method: "POST",
            body: JSON.stringify(user)
        });
        return data.json();
    } catch (error: any) {
        throw new Error(error);
    }
}