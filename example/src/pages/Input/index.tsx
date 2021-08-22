import React from 'react'
import { chunk } from 'lodash'
import { Column, Grid, Row } from 'fusion-ui'
import CodeBox from '../../components/CodeBox'
import data from './data'

const docs = chunk(data.docs, 2)
const renderApi = () => {
    return data.api.map((element: any) => {
        const { property, type, default: defaultValue, description } = element
        return (
            <tr key={property}>
                <td>
                    <strong>{property}</strong>
                </td>
                <td>
                    <code>{type}</code>
                </td>
                <td>
                    <code>{defaultValue}</code>
                </td>
                <td>{description}</td>
            </tr>
        )
    })
}

const InputPage = () => (
    <React.Fragment>
        <main className="fui-main">
            <div className="fui-content">
                <h2 id="button">Input</h2>
                <p>
                    A basic widget for getting the user input is a text field.
                    Keyboard and mouse can be used for providing or changing
                    data.
                </p>
                <Grid>
                    <Row>
                        <Column md={12} lg={6}>
                            {docs[0] &&
                                docs[0].map((doc: any) => (
                                    <CodeBox
                                        key={doc.title}
                                        title={doc.title}
                                        description={doc.description}
                                        examples={doc.examples}
                                    />
                                ))}
                        </Column>
                        <Column md={12} lg={6}>
                            {docs[1] &&
                                docs[1].map((doc: any) => (
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
                <h2 id="api">API</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Type</th>
                            <th>Default</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>{renderApi()}</tbody>
                </table>
            </div>
        </main>
    </React.Fragment>
)

export default InputPage
