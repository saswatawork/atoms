import { useInput } from "@/app/TextInput";
import { InputControlProps } from "@/app/TextInput/hook/useInput";
import { useState } from "react";

export interface SignUpState {
    name: InputControlProps,
    email: InputControlProps,
    phone: InputControlProps,
    username: InputControlProps,
    password: InputControlProps,
}



export const useSignUp = () => {

    const signUpState: SignUpState = {
        name: useInput(''),
        email: useInput(''),
        phone: useInput(''),
        username: useInput(''),
        password: useInput(''),
    }

    const onSignUp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return { signUpState, onSignUp };
}