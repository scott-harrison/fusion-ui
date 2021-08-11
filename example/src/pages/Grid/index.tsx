import React, { Fragment } from "react";
import { GridContainer, GridRow, GridColumn } from 'fusion-ui'

const code = {
    gridCode: `
      <GridContainer>
        <GridRow>
          <GridColumn xs={12} md={4}>
            Column 1
          </GridColumn>
          <GridColumn xs={12} md={8}>
            Column 2
          </GridColumn>
        </GridRow>
      </GridContainer>
    `.trimEnd()
}

const GridPage = () => (
    <Fragment>
        <main className="fui-main">
            <div className="fui-content">
                <h2 id="grid">Grid System</h2>
                <div className="fui-example">
                    <GridContainer>
                        <GridRow>
                            <GridColumn data-grid-column xs={12} md={4}>
                                Column 1
                            </GridColumn>
                            <GridColumn data-grid-column xs={12} md={8}>
                                Column 2
                            </GridColumn>
                        </GridRow>
                    </GridContainer>
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