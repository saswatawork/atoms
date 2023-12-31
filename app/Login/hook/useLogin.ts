import { useInput } from "@/app/TextInput";
import { InputControlProps } from "@/app/TextInput/hook/useInput";

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