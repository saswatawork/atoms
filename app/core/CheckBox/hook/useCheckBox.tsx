import { ChangeEvent, InvalidEvent, useState } from 'react'
import { CheckBoxControlProps } from '../type/CheckBoxType';

export const useCheckBox = (initialValue: string): CheckBoxControlProps => {

    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState('');
    const [checked, setChecked] = useState(false)


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setChecked(!checked);
        setValue(value);
    }
    const handleValidation = (e: InvalidEvent<HTMLInputElement>) => {
        const { validationMessage, validity } = e.target;
        if (!validity.valid) {
            setError(validationMessage)
        } else {
            setError('')
        }
    }
    return {
        value,
        checked,
        error,
        onChange: handleChange,
        setError,
        onInvalid: handleValidation,
    }

}