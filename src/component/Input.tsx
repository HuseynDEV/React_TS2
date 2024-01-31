import { ComponentPropsWithRef } from "react"

type InputProps = {
    label: string,
    id: string,
} & ComponentPropsWithRef<'input'>

const Input = ({ label, id, ...props }: InputProps) => {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} type='text' {...props} />
        </p>
    )
}

export default Input