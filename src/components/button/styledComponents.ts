import React from 'react';
import styled, { css } from 'styled-components';

export type StyledButtonProps = {
    disabled?: boolean;
    onClick?: () => void;
    ariaLabel?: string;
    size?: 'small' | 'medium' | 'large' | 'full';
    variant?: 'solid' | 'outline' | 'link';
    rounded?: boolean;
    href?: string;
    children?: React.ReactNode;
    value?: string;
}

const StyledButton = styled.button.attrs(({ disabled, onClick, ariaLabel }: StyledButtonProps) => ({
    onClick: disabled ? undefined : onClick,
    'aria-label': ariaLabel
}))<StyledButtonProps>`
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    font-size: 1rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    ${props => props.size === 'full' && css`
        width: 100%;
        padding: .50rem 1rem;
    `}
    ${props => props.size === 'small' && css`
        padding: .25rem .50rem;
        font-size: .7rem;
    `}

    ${props => props.size === 'medium' && css`
        padding: .25rem .80rem;
        font-size: .8rem;
    `}

    ${props => props.size === 'large' && css`
        padding: .50rem 1rem;
    `}

    ${props => props.variant === 'solid' && css`
        color: #ffffff;
        background-color: #0d6efd;
        border-color: #0d6efd;
        :hover {
            color: #fff;
            background-color: #094db1;
            border-color: #094db1;
        }
    `}

    ${props => props.variant === 'outline' && css`
        color: #0d6efd;
        border-color: #0d6efd;
        :hover {
            background-color: #0d6efd;
            color: #fff;
        }
    `}

    ${props => props.variant === 'link' && css`
        font-weight: 400;
        color: #0d6efd;
        text-decoration: underline;
    `}

    ${props => props.rounded === true && css`
        border-radius: .25rem;
    `}
`

export default StyledButton;