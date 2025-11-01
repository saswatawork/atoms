import { FormEvent } from "react";
import { TextInput } from "@/app/core/TextInput/component/TextInput";
import { Button } from "@/app/core/Button/component/Button";
import { CheckBox } from "@/app/core/CheckBox/component/CheckBox";
import "./SignUpForm.scss";

interface SignUpFormProps {
    onSignUp: (e: FormEvent<HTMLFormElement>) => void;
    signUpState: Record<any, any>
}

export const SignUpForm = ({ onSignUp, signUpState: { email, phone, password, termsNcondition } }: SignUpFormProps): JSX.Element => {
    return (
        <form className="sign-up__form" onSubmit={onSignUp}>
            <TextInput {...email} />
            <TextInput {...phone} />
            <TextInput {...password} />
            <CheckBox {...termsNcondition} />
            <Button type="submit"> Register Account </Button>
        </form>
    )
} 