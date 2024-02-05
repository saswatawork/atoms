
import { FormError } from "@/app/core/Error";
import { CheckBoxProps } from "../type/CheckBoxType";
import "./CheckBox.scss";

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