import { FormError } from "@/app/core/Button/Error";
import { InputControlProps } from "../hook/useInput";
import { InputHTMLAttributes } from "react";
import './TextInput.scss';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    inputControl: InputControlProps,
    label?: string,
}

export const TextInput = (props: TextInputProps): JSX.Element => {
    const { type = 'text', label, name, placeholder, required = false, inputControl: { value, error, onChange, onInvalid, onInput }, minLength } = props;

    return (
        <div className="text-input">
            <label htmlFor={label} className="text-input__label">{label ?? name}</label>
            <div className="text-input__wrapper">
                <input type={type} required={required}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onInvalid={onInvalid}
                    onInput={onInput}
                    minLength={minLength}
                    placeholder={placeholder ?? name}
                />
            </div>
        </div>
    )
}