import { Fragment } from "react";
import { chunk } from 'lodash'; 
//@ts-ignore
import Prism from "prismjs"
import { Column, Grid, Row } from 'fusion-ui'
import CodeBox from "../../components/CodeBox";
import data from './data';

const docs = chunk(data.docs, 2)
const renderApi = () => {
	return data.api.map((element, index) => {
		const { property, type, default: defaultValue, description } = element
		return (
			<tr key={index}>
				<td><strong>{property}</strong></td>
				<td><code>{type}</code></td>
				<td><code>{defaultValue}</code></td>
				<td>{description}</td>
			</tr>
		)
	})
}


const ButtonsPage = () => (
    <Fragment>
        <main className="fui-main">
            <div className="fui-content">
            	<h2 id="button">Buttons</h2>
               	<p>Fusions buttons styles are very simplistic offering outline and solid variants.</p>
				<Grid>
					<Row>
						<Column md={12} lg={6}>
							{docs[0] && docs[0].map((doc: any, key) => (
								<CodeBox key={key} title={doc.title} description={doc.description} examples={doc.examples} />
							))}
						</Column>
						<Column md={12} lg={6}>
							{docs[1] && docs[1].map((doc: any, key) => (
								<CodeBox key={key} title={doc.title} description={doc.description} examples={doc.examples} />
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
					<tbody>
						{renderApi()}
					</tbody>
				</table>
            </div>
        </main>
    </Fragment>
);

export default ButtonsPage;