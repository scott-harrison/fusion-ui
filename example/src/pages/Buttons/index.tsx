import { Fragment } from "react";
//@ts-ignore
import Prism from "prismjs"
// import { Button } from 'fusion-ui'

const code = {
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

const ButtonsPage = () => (
    <Fragment>
        <main className="fui-main">
            <div className="fui-content">
            <h2 id="button">Buttons</h2>
               <p>Fusions buttons styles are very simplistic offering outline and solid variants.</p>
               <div className="fui-example">
                 {/* <Button data-button value="Outline" size="small" variant="link" rounded />
                 <Button data-button value="Outline" size="small" variant="outline" rounded />
                 <Button data-button value="Solid" size="small" variant="solid" rounded />
                 <Button data-button value="Outline" size="medium" variant="outline" rounded />
                 <Button data-button value="Solid" size="medium" variant="solid" rounded />
                 <Button data-button value="Outline" size="large" variant="outline" rounded />
                 <Button data-button value="Solid" size="large" variant="solid" rounded />
                 <Button data-button value="Solid" size="large" variant="solid" /> */}
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
                 {/* <Button data-button value="Solid" size="full" variant="solid" rounded />
                 <Button data-button value="Outline" size="full" variant="outline" rounded /> */}
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
    </Fragment>
);

export default ButtonsPage;