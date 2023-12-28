import { InputHTMLAttributes } from "react";
import { CheckBoxControlProps } from "../hook/useCheckBox";
import { FormError } from "@/app/Error";
import "./CheckBox.scss";


interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    label?: string,
    checkBoxControl: CheckBoxControlProps
}



export const CheckBox = (props: CheckBoxProps): JSX.Element => {
    const { type = 'checkbox', label, name, required = false, value, checkBoxControl: { checked, error, onChange, setError, onInvalid } } = props;
    return (
        <div className="checkbox">
            <div>
                <input type={type} name={name} required={required} onChange={onChange} checked={checked} value={value} onInvalid={onInvalid} />
                <label htmlFor={label}>{value}</label>
            </div>
            {error && <FormError error={error} />}
        </div>


    )
}