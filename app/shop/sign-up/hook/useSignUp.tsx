import { useInput } from "@/app/core/TextInput";
import { InputControlProps } from "@/app/core/TextInput/hook/useInput";
import { useCheckBox, CheckBoxControlProps } from "@/app/core";

export interface SignUpState {
    email: InputControlProps,
    phone: InputControlProps,
    password: InputControlProps,
    termsNcondition: CheckBoxControlProps,
}



export const useSignUp = () => {

    const signUpState: SignUpState = {
        email: useInput(''),
        phone: useInput(''),
        password: useInput(''),
        termsNcondition: useCheckBox(''),
    }

    const onSignUp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return { signUpState, onSignUp };
}