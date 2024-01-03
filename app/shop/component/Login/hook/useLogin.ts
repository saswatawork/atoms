import { useInput } from "@/app/core/TextInput";
import { InputControlProps } from "@/app/core/TextInput/hook/useInput";

export interface LoginState {
    email: InputControlProps,
    password: InputControlProps,
}



export const useLogin = () => {

    const loginState: LoginState = {
        email: useInput(''),
        password: useInput(''),
    }

    const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return { loginState, onLogin };
}