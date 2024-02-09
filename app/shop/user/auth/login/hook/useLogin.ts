import { TextInputProps, useInput } from "@/app/core/TextInput";
import { login } from "../../../service/UserService";
import { useRouter } from 'next/navigation'
import { SHOP_PATH } from "@/app/shop/config";

export interface LoginState {
    email: TextInputProps,
    password: TextInputProps
}

export const useLogin = () => {
    const router = useRouter()
    const loginState: LoginState = {
        email: {
            name: "email",
            label: "email address",
            placeholder: "Enter email address",
            required: true,
            maxLength: 75,
            inputControl: useInput('')
        },
        password: {
            name: "password",
            type: 'password',
            required: true,
            maxLength: 25,
            label: "Create password",
            placeholder: "Enter password",
            inputControl: useInput('')
        },
    }

    const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { email, password } = loginState;
        const user = {
            email: email.inputControl.value,
            password: password.inputControl.value,
        }

        try {
            const loggedUser = await login(user);

            if (!loggedUser.error) {
                router.push(`${SHOP_PATH}/user/profile`)
            }
        } catch (error) {
            console.error(error)
        }
    }

    return { loginState, onLogin };
}