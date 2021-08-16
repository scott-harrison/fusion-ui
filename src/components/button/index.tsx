import React from 'react'
import { ButtonStyled } from './button';

const ButtonVariant = ['primary', 'outline', 'link'];
type ButtonVariant = typeof ButtonVariant[number];
type SizeType = 'small' | 'medium' | 'large' | 'full' | undefined;

export interface ButtonProps {
    variant?: ButtonVariant;
    size?: SizeType;
    disabled?: boolean;
    className?: string;
    style?: object;
    children?: React.ReactChild;
    onClick: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => void
}

const InternalButton: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (props, ref) => {
    const { onClick, disabled, variant, size, children, style } = props;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
        if (disabled) {
            e.preventDefault();
            return;
        }
        (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
    }

    if (variant === ButtonVariant[2] && size === 'full') {
        throw new Error("You can't use full with the link variant button")
    }

    return (
        <ButtonStyled ref={ref} style={style} variant={variant} size={size} disabled={disabled} onClick={handleClick}>{children}</ButtonStyled>
    )
}


const Button = React.forwardRef<unknown, ButtonProps>(InternalButton);

export { Button };