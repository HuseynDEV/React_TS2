import { type ComponentPropsWithoutRef , type ReactNode} from "react"

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    href?: never,
    children: ReactNode
}

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
    href?: string
}


function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
    return 'href' in props
}

const Button = (props: ButtonProps | AnchorProps) => {

    if (isAnchorProps(props)) {
        return <a className="button" {...props}></a>
    }

    return (
        <button className="button" {...props}>{props.children}</button>
    )
}

export default Button