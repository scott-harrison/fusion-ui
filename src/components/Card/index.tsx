import React from 'react'
import styled, { css } from 'styled-components'

interface IProps {
    title?: string
    width?: string
    center?: boolean
    children: React.ReactChild
}

interface ICardWrapper {
    width?: string
    center?: boolean
}

const CardWrapper = styled.div<ICardWrapper>`
    box-sizing: border-box;
    margin: 10px;
    padding: 0;
    color: #000000d9;
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: 'tnum';
    position: relative;
    background: #fff;
    border-radius: 2px;
    border: 1px solid #f0f0f0;
    ${(p) =>
        p.width &&
        css`
            width: ${p.width};
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
    const { title, width, children } = props
    return (
        <CardWrapper width={width} center={true}>
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
