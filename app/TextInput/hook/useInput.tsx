import { ChangeEvent, Dispatch, InvalidEvent, SetStateAction, useState } from 'react'

export interface InputControlProps {
    value: string,
    error: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    setError: Dispatch<SetStateAction<string>>,
    onInvalid: (e: InvalidEvent<HTMLInputElement>) => void,
    onInput: (e: ChangeEvent<HTMLInputElement>) => void,
}

export const useInput = (initialValue: string): InputControlProps => {
    const [value, setValue] = useState(initialValue)
    const [error, setError] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, validity, validationMessage } = e.target;
        if (validity.valid) {
            setError('');
        } else {
            setError(validationMessage);
        }
        setValue(value)
    }

    const handleValidation = (e: InvalidEvent<HTMLInputElement>) => {
        const { validity, validationMessage } = e.target;
        if (!validity.valid) {
            setError(validationMessage);
        } else {
            setError('');
        }
    }

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {

    }

    return {
        value,
        error,
        onChange: handleChange,
        setError,
        onInvalid: handleValidation,
        onInput: handleInput
    }
}