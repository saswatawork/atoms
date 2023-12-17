import React from "react"

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> { }

export const Button = ({ children, type, ...props }: ButtonProps): JSX.Element => {

    return (<div className="my-2.5">
        <button className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" {...props}> {children} </button>
    </div>)
}
