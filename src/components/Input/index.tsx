import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'

type sizeType = 'small' | 'medium' | 'large'

interface IProps {
    type: string
    label?: string
    inputSize?: sizeType
    required?: boolean
    error?: boolean
    helperText?: string
}

interface IFieldProps {
    type: string
    inputSize?: sizeType
    error?: boolean
}

interface IWrapper {
    required?: boolean
    inputSize?: sizeType
    error?: boolean
}

interface IHelperText {
    error?: boolean
}

interface ILabel {
    inputSize?: sizeType
}

const InputWrapper = styled.div<IWrapper>`
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 400px;
    margin: 0.8rem auto;
    background: #fff;
    transition: all 0.3s ease 0s, height 0s ease 0s;
    animation-duration: 0.8s;
    :focus-within,
    :hover {
        label {
            color: #107cdc;
        }
    }
    :first-child {
        margin-top: 0.2rem;
    }

    @keyframes shake {
        0%,
        100% {
            transform: translateX(0);
        }
        10%,
        30%,
        50%,
        70%,
        90% {
            transform: translateX(-0.2rem);
        }
        20%,
        40%,
        60%,
        80% {
            transform: translateX(0.2rem);
        }
    }

    ${(p) =>
        p.required &&
        css`
            &:after {
                content: '●';
                color: #107cdc;
                font-size: 0.35rem;
                position: absolute;
                right: 1rem;
                top: calc(50% - 0.15rem);
            }
        `}
    ${(p) =>
        p.error &&
        css`
            animation-name: shake;
            border-color: #c0392b;
            margin-bottom: 3.2rem;
        `}
`

const InputField = styled.input<IFieldProps>`
    flex-grow: 1;
    background: inherit;
    border: none;
    color: #000;
    font-size: 0.8rem;
    border: 1px solid #eaeaea;
    border-radius: 2px;
    padding: 0.8rem 1rem;
    vertical-align: middle;
    outline: none;
    transition: border-color 250ms ease color 250ms ease;
    ::placeholder {
        color: #d3d3d2;
    }
    :focus,
    :hover {
        border-color: #107cdc;
        caret-color: #107cdc;
    }
    ${(p) =>
        p.inputSize === 'small' &&
        css`
            font-size: 0.8rem;
            padding: 0.5rem 0.7rem;
        `}

    ${(p) =>
        p.inputSize === 'large' &&
        css`
            font-size: 1.1rem;
            padding: 1rem 1rem;
        `}

    ${(p) =>
        p.error === true &&
        css`
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            border-color: #c0392b;
        `}
`

const Label = styled.label<ILabel>`
    position: absolute;
    top: -0.5rem;
    left: 0.5rem;
    padding: 0.15rem 0.2rem;
    background-color: #fff;
    border-radius: 2px;
    font-size: 0.5rem;
    color: #a2a2a2;
    transition: all 0.3s ease 0s, height 0s ease 0s;

    ${(p) =>
        p.inputSize === 'medium' &&
        css`
            top: -0.65rem;
            font-size: 0.8rem;
        `}

    ${(p) =>
        p.inputSize === 'large' &&
        css`
            top: -0.8rem;
            font-size: 1rem;
        `}
`

const HelperText = styled.p<IHelperText>`
    position: absolute;
    top: 100%;
    width: 100%;
    padding: 0.4rem 0.8rem;
    margin: 0;
    font-size: 0.8rem;
    ${(p) =>
        p.error &&
        css`
            background-color: #c0392b;
            color: #fff;
        `}
`

const InternalInput = (
    props: IProps,
    ref: React.ForwardedRef<HTMLInputElement>
) => {
    const { type, inputSize, label, required, error, helperText } = props

    return (
        <Fragment>
            <InputWrapper
                ref={ref}
                inputSize={inputSize}
                required={required}
                error={error}
            >
                {label && <Label inputSize={inputSize}>{label}</Label>}
                <InputField type={type} inputSize={inputSize} error={error} />
                {helperText && <HelperText error>{helperText}</HelperText>}
            </InputWrapper>
        </Fragment>
    )
}

const Input = React.forwardRef<unknown, IProps>(InternalInput)
Input.defaultProps = {
    inputSize: 'medium',
    required: false,
    error: false,
    type: 'text',
}
export { Input }
