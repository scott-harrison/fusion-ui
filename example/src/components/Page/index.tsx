import { ReactElement } from 'react'
import { Column, Grid, Row } from 'fusion-ui'
import CodeBox from '../../components/CodeBox'

interface Idoc {
    title: string
    description?: string
    examples?: { demo: () => ReactElement; code: string }[]
}

const Page = (props: any) => {
    const { name, description, docs } = props

    const even: Idoc[] = []
    const odd: Idoc[] = []

    docs.forEach((data: Idoc, index: number) => {
        if (index % 2 === 0) {
            even.push(data)
        } else {
            odd.push(data)
        }
    })

    return (
        <div>
            <div className="fui-description">
                <h2 id="button">{name}</h2>
                {description && <p>{description}</p>}
            </div>
            <Grid>
                <Row>
                    <Column md={12} lg={6}>
                        {even &&
                            even.map((doc: any) => (
                                <CodeBox
                                    key={doc.title}
                                    title={doc.title}
                                    description={doc.description}
                                    examples={doc.examples}
                                />
                            ))}
                    </Column>
                    <Column md={12} lg={6}>
                        {odd &&
                            odd.map((doc: any) => (
                                <CodeBox
                                    key={doc.title}
                                    title={doc.title}
                                    description={doc.description}
                                    examples={doc.examples}
                                />
                            ))}
                    </Column>
                </Row>
            </Grid>
        </div>
    )
}

export default Page
