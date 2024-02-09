import { Button, LoginForm } from "@/app/core"
import { useLogin } from "../hook";
import { SHOP_PATH } from "@/app/shop/config";
import { BUTTON_THEME } from "@/app/core/Button";
import "./Login.scss";


export const Login = (): JSX.Element => {
    const { onLogin, loginState } = useLogin();

    return (

        <div className="login">
            <div className="login__head">
                <h3>Enter Your login credentials!</h3>
                <p>
                    To get your profile access, login here!
                </p>
            </div>
            <LoginForm onLogin={onLogin} loginState={loginState} />
            <div className="login__button">
                <span>or</span>
                <a href={`${SHOP_PATH}/user/sign-up`}>
                    <Button type="button" theme={BUTTON_THEME.SECONDARY}> Register </Button>
                </a>
            </div>
        </div>
    )
}