import React from 'react'
import styled, { css } from 'styled-components'

interface IProps {
    title?: string
    maxWidth?: string
    center?: boolean
    children: React.ReactNode
}

interface ICardWrapper {
    maxWidth?: string
    center?: boolean
}

const CardWrapper = styled.div<ICardWrapper>`
    box-sizing: border-box;
    margin: 10px;
    padding: 0;
    color: #000000d9;
    font-size: 14px;
    position: relative;
    background: #fff;
    border-radius: 2px;
    border: 1px solid #f0f0f0;
    width: 100%;
    ${(p) =>
        p.maxWidth &&
        css`
            max-width: ${p.maxWidth};
        `}

    ${(p) =>
        p.center &&
        css`
            margin: 10px auto;
        `}
`
const CardHead = styled.div`
    min-height: 48px;
    margin-bottom: -1px;
    padding: 0 24px;
    color: #000000d9;
    font-weight: 500;
    font-size: 16px;
    background: 0 0;
    border-bottom: 1px solid #f0f0f0;
    border-radius: 2px 2px 0 0;
`
const CardTitle = styled.h3`
    color: #000;
`
const CardBody = styled.div`
    padding: 24px;
`

const Card = (props: IProps) => {
    const { title, maxWidth, children } = props
    return (
        <CardWrapper maxWidth={maxWidth} center={true}>
            {title && (
                <CardHead>
                    <CardTitle>{title}</CardTitle>
                </CardHead>
            )}
            <CardBody>{children}</CardBody>
        </CardWrapper>
    )
}

export { Card }
