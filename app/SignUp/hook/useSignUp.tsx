import { useInput } from "@/app/TextInput";
import { InputControlProps } from "@/app/TextInput/hook/useInput";
import { useState } from "react";

export interface SignUpState {
    email: InputControlProps,
    phone: InputControlProps,
    password: InputControlProps,
}



export const useSignUp = () => {

    const signUpState: SignUpState = {
        email: useInput(''),
        phone: useInput(''),
        password: useInput(''),
    }

    const onSignUp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return { signUpState, onSignUp };
}