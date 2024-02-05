import { ChangeEvent, Dispatch, InputHTMLAttributes, InvalidEvent, SetStateAction } from "react";

export interface InputControlProps {
    value: string,
    error: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    setError: Dispatch<SetStateAction<string>>,
    onInvalid: (e: InvalidEvent<HTMLInputElement>) => void,
    onInput: (e: ChangeEvent<HTMLInputElement>) => void,
}


export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    inputControl: InputControlProps,
    label?: string,
}