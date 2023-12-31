import { useInput } from "@/app/TextInput";
import { InputControlProps } from "@/app/TextInput/hook/useInput";
import { useCheckBox, CheckBoxControlProps } from "@/app/CheckBox/hook/useCheckBox";

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