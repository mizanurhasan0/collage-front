import React from 'react';

type btnTypes = {
    children: React.ReactNode,
    onClick?: () => void,
    type?: undefined | 'button' | 'submit',
    className?: string
}

export default function CBtn({ children, onClick, type = 'button', className = '' }: btnTypes) {
    return (
        <button type={type}
            className={`bg-base3 text-base1 p-3 rounded-xl font-medium w-full ${className}`} onClick={onClick}>{children}</button>
    )
}
