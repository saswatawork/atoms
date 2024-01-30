import { TextInputProps, useInput } from "@/app/core/TextInput";

export interface LoginState {
    email: TextInputProps,
    password: TextInputProps
}

export const useLogin = () => {

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
            required: true,
            maxLength: 25,
            label: "Create password",
            placeholder: "Enter password",
            inputControl: useInput('')
        },
    }

    const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return { loginState, onLogin };
}