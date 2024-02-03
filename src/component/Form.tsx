import { ComponentPropsWithoutRef, FormEvent } from "react"



type FormProps = ComponentPropsWithoutRef<'form'>

function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
}

const Form = (props: FormProps) => {
    return <form onSubmit={handleSubmit}>{props.children}</form>

}

export default Form