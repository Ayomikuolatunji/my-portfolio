import React from 'react'


interface Props{
    className?: string;
    open:boolean,
    children?:JSX.Element
}


export const PageItemWrapper:React.FC <Props> = ({className, children}) => {
    return (
       <div className={className}>{children}</div>
    )
}