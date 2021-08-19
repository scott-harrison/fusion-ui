import { Fragment } from "react";
import { Grid, Row, Column } from 'fusion-ui'

const code = {
    gridCode: `
      <Grid>
        <Row>
          <Column xs={12} md={4}>
            Column 1
          </Column>
          <Column xs={12} md={8}>
            Column 2
          </Column>
        </Row>
      </Grid>
    `.trimEnd()
}

const GridPage = () => (
    <Fragment>
        <main className="fui-main">
            <div className="fui-content">
                <h2 id="grid">Grid System</h2>
                <div className="fui-example">
                    <Grid>
                        <Row>
                            <Column data-grid-column xs={12} md={4}>
                                Column 1
                            </Column>
                            <Column data-grid-column xs={12} md={8}>
                                Column 2
                            </Column>
                        </Row>
                    </Grid>
                </div>
                <div className="highlight">
                    <pre className="line-numbers">
                    <code className="language-html">
                        {
                            code.gridCode
                        }
                    </code>
                    </pre>
                </div>
            </div>
        </main>
    </Fragment>
);

export default GridPage;