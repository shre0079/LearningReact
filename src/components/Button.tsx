import React from 'react'

type ButtonColor = 'primary' | 'secondary' | 'danger';

interface Props {
    children: string;
    onClick: () => void;
    color?: ButtonColor;
}

const Button = ({children, onClick, color = 'secondary'}: Props) => {
    return (
        <button className={'btn btn-' + color} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;