import { ChangeEvent, Dispatch, InputHTMLAttributes, InvalidEvent, SetStateAction } from 'react'

export interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    label?: string,
    checkBoxControl: CheckBoxControlProps
}

export interface CheckBoxControlProps {
    value: string,
    error: string,
    checked: boolean,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    setError: Dispatch<SetStateAction<string>>,
    onInvalid: (e: InvalidEvent<HTMLInputElement>) => void,
}