interface IApi {
    property: string
    type: string
    default: string
    description: string
}

const renderApi = (api: IApi[]) => {
    if (!api.length) {
        return <p>No api documentation available</p>
    }

    return api.map((element: any) => {
        const { property, type, default: defaultValue, description } = element
        return (
            <tr key={property}>
                <td>
                    <strong>{property}</strong>
                </td>
                <td>
                    <code className="highlight">{type}</code>
                </td>
                <td>
                    <code>{defaultValue}</code>
                </td>
                <td>{description}</td>
            </tr>
        )
    })
}

const ApiRef = (props: any) => {
    const { data } = props

    return (
        <div>
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
                <tbody>{data && renderApi(data)}</tbody>
            </table>
        </div>
    )
}

export default ApiRef
