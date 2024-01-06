import { BUTTON_THEME, Button } from "@/app/core/Button";
import { useLogin } from "../hook/useLogin"
import { TextInput } from "@/app/core/TextInput";
import "./LoginForm.scss"
import { SHOP_PATH } from "@/app/shop/config";

export const LoginForm = (): JSX.Element => {
    const { onLogin, loginState: { email, password } } = useLogin();

    return (
        <div className="login">
            <div className="login__head">
                <h3>Enter Your login credentials!</h3>
                <p>
                    To get your profile access, login here!
                </p>
            </div>
            <form className="login__form" onSubmit={onLogin}>
                <TextInput maxLength={75} type='email' label="email address" placeholder="Enter email address" required name="email" inputControl={email} />
                <TextInput required maxLength={25} name="password" label="Create password" placeholder="Enter password" inputControl={password} />
            </form>

            <div className="login__button">
                <Button type="submit"> Login </Button>
                <span>or</span>
                <a href={`${SHOP_PATH}/sign-up`}>
                    <Button type="button" theme={BUTTON_THEME.SECONDARY}> Register </Button>
                </a>
            </div>
        </div>
    )
} 