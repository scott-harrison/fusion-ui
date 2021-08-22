import styled from 'styled-components/macro'
import { css } from 'styled-components'
import { ButtonProps } from '.'

export const AnchorStyled = styled.a<ButtonProps>`
    font-size: inherit;
    padding: 0;
    border-bottom: 1px solid #212529;
    color: #212529;
    cursor: pointer;
    text-decoration: none;
    transition: color 0.15s ease-in-out;
`

export const ButtonStyled = styled.button<ButtonProps>`
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
    border-radius: 4px;
    font-size: 0.8rem;
    padding: 0.2rem 0.8rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out;

    ${(props) =>
        props.variant === 'primary' &&
        css`
            color: #fff;
            background-color: #0d6efd;
            :hover {
                color: #0d6efd;
                background-color: transparent;
                border-color: #0d6efd;
            }
        `}

    // Sizes
    ${(p) =>
        p.size === 'small' &&
        css`
            font-size: 0.9rem;
            padding: 0.25rem 0.6rem;
        `}

    ${(p) =>
        p.size === 'medium' &&
        css`
            font-size: 0.9rem;
            padding: 0.5rem 1.25rem;
        `}

    ${(p) =>
        p.size === 'large' &&
        css`
            font-size: 1.1rem;
            padding: 0.6rem 2rem;
        `}

    ${(p) =>
        p.size === 'full' &&
        css`
            display: block;
            width: 100%;
            padding: 0.5rem 1rem;
            font-size: 1.1rem;
        `}

    // Varients
    ${(p) =>
        p.variant === 'outline' &&
        css`
            color: #0d6efd;
            border-color: #0d6efd;
            :hover {
                background-color: #0d6efd;
                color: #fff;
            }
        `}

    ${(p) =>
        p.variant === 'link' &&
        css`
            background-color: transparent;
            font-size: inherit;
            color: inherit;
            padding: 0;
        `}

    ${(p) =>
        p.disabled === true &&
        css`
            border-color: #d9d9d9;
            background-color: #e9e9e9;
            cursor: not-allowed;
            color: #bdbcbc;
            :hover {
                background-color: #e9e9e9;
                border-color: #d9d9d9;
                color: #bdbcbc;
            }
        `}
`
