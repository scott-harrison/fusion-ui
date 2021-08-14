import React from 'react'
import { ButtonStyled } from './button';

const ButtonTypes = ['default', 'primary', 'outline', 'link'];
type ButtonType = typeof ButtonTypes[number];
type SizeType = 'small' | 'middle' | 'large' | undefined;

interface ButtonProps {
    type?: ButtonType;
    size?: SizeType;
    disabled: boolean;
    className?: string;
    children?: React.ReactChild;
    onClick: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => void
}

const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props) => {
    const { onClick, disabled, type, children } = props;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
        if (disabled) {
            e.preventDefault();
            return;
        }
        (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
    }

    if (type === 'link') {
        return (
            <ButtonStyled onClick={handleClick}>{children}</ButtonStyled>
        )
    }
    return (
        <ButtonStyled onClick={handleClick}>{children}</ButtonStyled>
    )
}


const Button = React.forwardRef<unknown, ButtonProps>(InternalButton);

export { Button };