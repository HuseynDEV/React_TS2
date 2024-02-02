import { type ReactNode, type ComponentPropsWithoutRef } from "react"

type ButtonProps = ComponentPropsWithoutRef<'button'>

type AnchorPorps = ComponentPropsWithoutRef<'a'>

function isAnchorProps(props: ButtonProps | AnchorPorps): props is AnchorPorps {
    return 'href' in props
}

const Button = (props: ButtonProps | AnchorPorps, children:ReactNode) => {

    if (isAnchorProps(props)) {
        return <a href="" className="button" {...props}></a>
    }

    return (
        <button className="button" {...props}>{children}</button>
    )
}

export default Button