import React from 'react'
import styled from 'styled-components';
//@ts-ignore
import Prism from "prismjs"

import { Button, GridContainer, GridRow, GridColumn } from 'fusion-ui'

const StickyNav = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 5rem;
  display: block !important;
  height: calc(100vh - 7rem);
  padding-left: .25rem;
  margin-left: -.25rem;
  overflow-y: auto;
`;

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
  `.trimEnd(),
  buttonCode: `
    <Button value="Outline" size="small" variant="outline" rounded />
    <Button value="Solid" size="small" variant="solid" rounded />
    <Button value="Solid" size="medium" variant="solid" rounded />
  `.trimEnd(),
  fullButtonCode: `
    <Button data-button value="Solid" size="full" variant="solid" rounded />
    <Button data-button value="Outline" size="full" variant="outline" rounded />
  `.trimEnd()
}

const App = () => {
  setTimeout(() => Prism.highlightAll(), 0)

  return (
    <GridContainer full>
      <GridRow>
        <GridColumn xs={12} md={2}>
          <StickyNav className="fui-sidebar">
            <ul>
              <li><a href="#grid">Grid System</a></li>
              <li><a href="#buttons">Buttons</a></li>
            </ul>
          </StickyNav>
        </GridColumn>
        <GridColumn xs={12} md={10}>
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
            <div className="fui-content">
              <h2 id="button">Buttons</h2>
              <p>Fusions buttons styles are very simplistic offering outline and solid variants.</p>
              <div className="fui-example">
                <Button data-button value="Outline" size="small" variant="link" rounded />
                <Button data-button value="Outline" size="small" variant="outline" rounded />
                <Button data-button value="Solid" size="small" variant="solid" rounded />
                <Button data-button value="Outline" size="medium" variant="outline" rounded />
                <Button data-button value="Solid" size="medium" variant="solid" rounded />
                <Button data-button value="Outline" size="large" variant="outline" rounded />
                <Button data-button value="Solid" size="large" variant="solid" rounded />
                <Button data-button value="Solid" size="large" variant="solid" />
              </div>
              <div className="highlight">
                <pre className="line-numbers">
                  <code className="language-html">
                    {
                      code.buttonCode
                    }
                  </code>
                </pre>
              </div>
              <div className="fui-example">
                <Button data-button value="Solid" size="full" variant="solid" rounded />
                <Button data-button value="Outline" size="full" variant="outline" rounded />
              </div>
              <div className="highlight">
                <pre className="line-numbers">
                  <code className="language-html">
                    {
                      code.fullButtonCode
                    }
                  </code>
                </pre>
              </div>
            </div>
          </main>
        </GridColumn>
      </GridRow>
    </GridContainer>
  )
}
export default App
