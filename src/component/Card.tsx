import { type ReactNode } from 'react'

type CardProps = {
    title: string,
    actions: ReactNode,
    children: ReactNode
}


const Card = ({ title, children, actions }: CardProps) => {
    return (
        <section>
            <h2>{title}</h2>
            {children}
            {actions}
        </section>
    )
}

export default Card