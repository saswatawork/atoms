import React from "react"
import classNames from "classnames";
import { BUTTON_THEME } from "../constant";
import "./Button.scss";


interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    theme?: BUTTON_THEME
}

export const Button = ({ children, type = 'button', theme = BUTTON_THEME.PRIMIARY, ...props }: ButtonProps): JSX.Element => {

    return (
        <button className={classNames("button", theme)} {...props}> {children} </button>
    )
}
