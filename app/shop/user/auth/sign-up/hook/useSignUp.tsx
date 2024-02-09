import { TextInputProps, useInput } from "@/app/core/TextInput";
import { CheckBoxProps, useCheckBox } from "@/app/core/CheckBox";
import { useRouter } from 'next/navigation'
import { SHOP_PATH } from "@/app/shop/config";
import { addUser } from "../../../service/UserService";

export interface SignUpState {
    email: TextInputProps,
    phone: TextInputProps,
    password: TextInputProps,
    termsNcondition: CheckBoxProps,
}



export const useSignUp = () => {
    const router = useRouter();

    const signUpState: SignUpState = {
        email: {
            name: "email",
            label: "email address",
            placeholder: "Enter email address",
            required: true,
            maxLength: 75,
            inputControl: useInput('')
        },
        phone: {
            required: true,
            maxLength: 10,
            name: "phone",
            placeholder: "Enter phone no.",
            inputControl: useInput('')
        },
        password: {
            name: "password",
            required: true,
            maxLength: 25,
            label: "Create password",
            placeholder: "Enter password",
            type: 'password',
            inputControl: useInput('')
        },
        termsNcondition: {
            required: true,
            name: "terms",
            value: "'I'd like being informed about latest news & tips",
            checkBoxControl: useCheckBox('')
        },
    }

    const onSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { email, password, phone } = signUpState;
        const user = {
            email: email.inputControl.value,
            phone: phone.inputControl.value,
            password: password.inputControl.value,
        }

        try {
            const addedUser = await addUser(user);
            if (addedUser) {
                router.push(`${SHOP_PATH}/user/auth/login`)
            }
        } catch (error) {
            console.error(error)
        }
    }

    return { signUpState, onSignUp };
}