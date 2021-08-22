import React from 'react'
import styled from 'styled-components'
import parseMarkup from 'html-react-parser'

interface IExample {
    title: string
    description?: string
    demo: () => React.ReactChild
    code: string
}

const Box = styled.div`
    position: relative;
    display: inline-block;
    width: 100%;
    margin: 0 0 16px;
    border: 1px solid #f0f0f0;
    border-radius: 2px;
    transition: all 0.2s;
`

const Demo = styled.section`
    padding: 30px 24px 30px;
    color: #000000d9;
    border-bottom: 1px solid #f0f0f0;
`

const Meta = styled.section`
    position: relative;
    border-bottom: 1px dashed #f0f0f0;
    border-radius: 0;
`

const Title = styled.div`
    position: absolute;
    top: -12px;
    margin-left: 16px;
    padding: 1px 8px;
    color: #777;
    background: #fff;
    transition: background-color 0.4s;
`

const Description = styled.div`
    padding: 18px 24px 12px;
`

const renderExamples = (examples: [IExample]) => {
    return examples.map((example: IExample) => {
        return (
            <div key={example.title}>
                <Meta>
                    <Title>{example.title}</Title>
                    {example.description && (
                        <Description>
                            {parseMarkup(example.description)}
                        </Description>
                    )}
                    <Demo>{example.demo()}</Demo>
                    <div className="highlight">
                        <pre className="line-numbers">
                            <code className="language-markup">
                                {example.code}
                            </code>
                        </pre>
                    </div>
                </Meta>
            </div>
        )
    })
}

const CodeBox = (props: any) => {
    const { title, description, examples } = props

    return (
        <Box>
            <Meta>
                <Title>{title}</Title>
                <Description>{parseMarkup(description)}</Description>
            </Meta>
            {renderExamples(examples)}
        </Box>
    )
}

export default CodeBox
