import { FormError } from "@/app/Error";
import { InputControlProps } from "../hook/useInput";
import { InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    inputControl: InputControlProps,
    label?: string,
}

export const TextInput = (props: TextInputProps): JSX.Element => {
    const { type = 'text', label, name, required = false, inputControl: { value, error, onChange, onInvalid, onInput }, minLength } = props;

    return (
        <div className="mt-2">
            <label htmlFor={label} className="block text-sm font-medium leading-6 text-gray-900 mb-2 capitalize">{label ?? name}</label>
            <div>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input type={type} required={required} name={name} value={value} onChange={onChange} onInvalid={onInvalid} onInput={onInput} minLength={minLength}
                        className="block w-full flex-1 itens-center border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" />

                </div>
                {error && <FormError error={error} />}
            </div>
        </div>
    )
}