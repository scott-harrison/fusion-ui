import { Fragment } from "react";
import { chunk } from 'lodash'; 
//@ts-ignore
import Prism from "prismjs"
import { Column, Grid, Row } from 'fusion-ui'
import CodeBox from "../../components/CodeBox";
import docs from './data';

const data = chunk(docs, 2)
const ButtonsPage = () => (
    <Fragment>
        <main className="fui-main">
            <div className="fui-content">
            	<h2 id="button">Buttons</h2>
               	<p>Fusions buttons styles are very simplistic offering outline and solid variants.</p>
				<Grid>
					<Row>
						<Column md={12} lg={6}>
							{data[0] && data[0].map((doc: any, key) => (
								<CodeBox key={key} title={doc.title} description={doc.description} examples={doc.examples} />
							))}
						</Column>
						<Column md={12} lg={6}>
							{data[1] && data[1].map((doc: any, key) => (
								<CodeBox key={key} title={doc.title} description={doc.description} examples={doc.examples} />
							))}
						</Column>
					</Row>
				</Grid>
            </div>
        </main>
    </Fragment>
);

export default ButtonsPage;