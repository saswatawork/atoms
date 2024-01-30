import { Button } from "@/app/core/Button";
import { TextInput } from "@/app/core/TextInput";
import "./LoginForm.scss"
import { FormEvent } from "react";


interface LoginFormProps {
    onLogin: (e: FormEvent<HTMLFormElement>) => void;
    loginState: Record<any, any>
}

export const LoginForm = (props: LoginFormProps): JSX.Element => {
    const { onLogin, loginState } = props;

    return (
        <form className="login__form" onSubmit={onLogin}>
            {Object.keys(loginState).map((login) => <TextInput key={login} {...loginState[login]} />)}
            <Button type="submit"> Login </Button>
        </form>
    )
} 