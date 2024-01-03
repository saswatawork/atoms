import { BUTTON_THEME, Button } from "@/app/core/Button";
import { useSignUp } from "../hook/useSignUp"
import { TextInput, CheckBox } from "@/app/core";
import "./SignUpForm.scss"
import { SHOP_PATH } from "@/app/shop/config";

export const SignUpForm = (): JSX.Element => {
    const { onSignUp, signUpState: { email, phone, password, termsNcondition } } = useSignUp();

    return (
        <div className="sign-up">
            <div className="sign-up__head">
                <h3>Register Individual Account!</h3>
                <p>
                    For the purpose of gamers regulation, your details are required.
                </p>
            </div>
            <form className="sign-up__form" onSubmit={onSignUp}>
                <TextInput maxLength={75} type='email' label="email address" placeholder="Enter email address" required name="email" inputControl={email} />
                <TextInput required maxLength={10} name="phone" placeholder="Enter phone no." inputControl={phone} />
                <TextInput required maxLength={25} name="password" label="Create password" placeholder="Enter password" inputControl={password} />
                <CheckBox required name="terms" value="'I'd like being informed about latest news & tips" checkBoxControl={termsNcondition} />
            </form>

            <div className="sign-up__button">
                <Button type="submit"> Register Account </Button>
                <span>or</span>
                <a href={`${SHOP_PATH}/login`}>
                    <Button type="button" theme={BUTTON_THEME.SECONDARY}> Login </Button>
                </a>
            </div>
        </div>
    )
} 