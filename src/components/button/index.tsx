import React from 'react';
import StyledButton, { StyledButtonProps } from "./styledComponents"

export interface ButtonProps extends StyledButtonProps {}

const Button: React.FC<ButtonProps> = ({
    size = 'medium',
    variant = 'solid',
    rounded = false,
    ...rest
}) => {
    const props = { size, variant, rounded, ...rest };

    return (
        <StyledButton {...props}>
            {props.children || props.value}
        </StyledButton>
    )
};

export { Button, StyledButton, StyledButtonProps };