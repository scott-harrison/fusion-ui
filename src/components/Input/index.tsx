import React, { ChangeEvent, Fragment } from 'react'
import styled, { css } from 'styled-components'

type sizeType = 'small' | 'medium' | 'large'

interface IProps {
    type: string
    label?: string
    inputSize?: sizeType
    required?: boolean
    error?: boolean
    helperText?: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    value: string
}

interface IFieldProps {
    type: string
    inputSize?: sizeType
    error?: boolean
}

interface IWrapper {
    required?: boolean
    inputSize?: sizeType
    helperText?: boolean
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
    display: block;
    width: 100%;
    padding: 1.5rem 0 1rem;
    margin: 0 auto;
    animation-duration: 0.8s;

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
                font-family: 'Helvetica Neue';
                font-size: 0.8rem;
                position: absolute;
                top: calc(50% - 0.2rem);
                right: 1rem;
            }
        `}
    ${(p) =>
        p.error &&
        css`
            animation-name: shake;
            border-color: #c0392b;
        `}

    ${(p) =>
        p.helperText === true &&
        css`
            padding-bottom: 0;
            &:after {
                top: calc(50% - 0.5rem);
            }
        `}

    ${(p) => p.inputSize === 'large' && css``}
`

const Label = styled.label<ILabel>`
    position: absolute;
    top: 0rem;
    left: 0;
    font-family: 'Helvetica Neue';
    font-weight: 400;
    font-size: 0.8rem;
    letter-spacing: 0.04rem;
    transition: 0.2s;
    pointer-events: none;
    ${(p) =>
        p.inputSize === 'large' &&
        css`
            font-size: 1rem;
        `}
`

const InputField = styled.input<IFieldProps>`
    width: 100%;
    border: 1px solid #e3e3e3;
    outline: 0;
    font-size: 0.8rem;
    font-family: 'Helvetica Neue';
    font-weight: 400;
    line-height: 0.8rem;
    letter-spacing: 0.04rem;
    color: #000;
    background: transparent;
    padding: 0.8rem 1rem;
    outline: none;
    transition: border-color 0.2s;
    &:focus ~ ${Label} {
        position: absolute;
        display: block;
        left: 0;
        transition: 0.2s;
    }
    &::placeholder {
        color: transparent;
    }
    &:placeholder-shown ~ ${Label} {
        font-size: 0.8rem;
        cursor: text;
        color: #c3c3c3;
        top: 2.4rem;
        left: 1rem;
    }

    ${(p) =>
        p.error &&
        css`
            border-color: #c0392b;
            color: #c0392b;
            & ~ ${Label} {
                color: #c0392b;
            }
            &:placeholder-shown ~ ${Label} {
                color: #c0392b;
            }
            &:focus {
                color: #000;
            }
        `}

    ${(p) =>
        p.inputSize === 'small' &&
        css`
            font-size: 0.8rem;
            padding: 0.6rem 0.8rem;
            &:placeholder-shown ~ ${Label} {
                font-size: 0.8rem;
                top: 2.2rem;
                left: 0.8rem;
            }
        `}
    ${(p) =>
        p.inputSize === 'large' &&
        css`
            font-size: 1rem;
            padding: 1rem 1.2rem;
            &:placeholder-shown ~ ${Label} {
                font-size: 1rem;
                top: 2.5rem;
                left: 1.2rem;
            }
        `}
`

const HelperText = styled.p<IHelperText>`
    display: block;
    width: 100%;
    padding: 0.4rem 0.8rem;
    margin: 0;
    font-size: 0.8rem;
    ${(p) =>
        p.error &&
        css`
            margin-bottom: 1rem;
            background-color: #c0392b;
            color: #fff;
        `}
`

const InternalInput = (
    props: IProps,
    ref: React.ForwardedRef<HTMLInputElement>
) => {
    const {
        type,
        inputSize,
        label,
        required,
        error,
        helperText,
        onChange,
        value,
    } = props

    return (
        <Fragment>
            <InputWrapper
                ref={ref}
                inputSize={inputSize}
                required={required}
                helperText={!!helperText}
                error={error}
            >
                <InputField
                    type={type}
                    placeholder={label}
                    inputSize={inputSize}
                    error={error}
                    onChange={onChange}
                    value={value}
                />
                {label && <Label inputSize={inputSize}>{label}</Label>}
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
