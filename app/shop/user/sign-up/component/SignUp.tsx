import { Button } from "@/app/core/Button/component/Button";
import { SignUpForm } from "@/app/core/SignUpForm/component/SignUpForm";
import { SHOP_PATH } from "@/app/shop/config";
import { BUTTON_THEME } from "@/app/core/Button/constant";
import { useSignUp } from "../hook/useSignUp";
import "./SignUp.scss";

export const SignUp = (): JSX.Element => {
    const { onSignUp, signUpState } = useSignUp();

    return (
        <div className="sign-up">
            <div className="sign-up__head">
                <h3>Register Individual Account!</h3>
                <p>
                    For the purpose of gamers regulation, your details are required.
                </p>
            </div>
            <SignUpForm onSignUp={onSignUp} signUpState={signUpState} />
            <div className="sign-up__button">
                <span>or</span>
                <a href={`${SHOP_PATH}/user/login`}>
                    <Button type="button" theme={BUTTON_THEME.SECONDARY}> Login </Button>
                </a>
            </div>
        </div>
    )

}