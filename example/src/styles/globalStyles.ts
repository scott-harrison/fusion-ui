import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
            'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }

    .fui-main {
        position: relative;
        min-height: 500px;
        padding: 0 20px 32px 20px;
        background: #fff;
    }

    .fui-description {
        margin-bottom: 4rem;
    }

    .fui-example {
        padding: 1.5rem;
        margin-right: 0;
        margin-left: 0;
        border-width: 1px;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
        margin: 1rem auto 0;
        border-color: #dee2e6;
        border-style: solid;
    }

    .fui-example > [data-button] {
        margin: 0.25rem 0.125rem;
    }

    .highlight {
        padding: 1rem 1.5rem;
        background-color: #f8f9fa;
        overflow-x: auto;
    }

    .fui-example [data-grid-column] {
        border: 1px solid #dee2e6;
        background-color: #f8f9fa;
        padding: 1rem;
    }

    .fui-sidebar {
        border-right: 1px solid #f0f0f0;
    }

    .fui-sidebar ul {
        padding: 0;
    }

    .fui-sidebar li {
        box-sizing: border-box;
        font-family: Avenir, -apple-system, system-ui, 'segoe ui', Roboto,
            'helvetica neue', Arial, 'noto sans', sans-serif, 'apple color emoji',
            'segoe ui emoji', 'segoe ui symbol', 'noto color emoji', sans-serif;
        font-size: 14px;
        line-height: 40px;
        list-style-image: none;
        list-style-position: outside;
        list-style-type: none;
        position: relative;
        text-align: left;
    }

    .fui-sidebar li:not(:last-child) {
        border-bottom: thin solid #ececec;
    }

    .fui-sidebar a {
        display: block;
        padding: 0.4rem 0.5rem;
        color: #000;
        text-decoration: none;
    }

    .fui-sidebar a:hover {
        background-color: #f8f9faa4;
        color: rgba(43, 43, 43, 0.65);
    }

    table {
        display: table;
        margin: 2em 0;
        overflow-x: auto;
        overflow-y: hidden;
        font-size: 13px;
        font-family: Avenir, -apple-system, system-ui, 'segoe ui', Roboto,
            'helvetica neue', Arial, 'noto sans', sans-serif, 'apple color emoji',
            'segoe ui emoji', 'segoe ui symbol', 'noto color emoji', sans-serif;
        line-height: 1.5715;
        border: 0;
        width: 100%;
        margin: 8px 0 16px;
        direction: ltr;
        empty-cells: show;
        border: 1px solid #f0f0f0;
        border-collapse: collapse;
        border-spacing: 0;
    }

    table th:not(:last-child),
    table td:not(:last-child) {
        border-right: 1px solid #f0f0f0;
    }

    table th {
        padding-top: 14px;
        border-width: 1px 0 2px;
        color: #5c6b77;
        font-weight: 500;
        white-space: nowrap;
        background: rgba(0, 0, 0, 0.02);
    }

    table td,
    table th {
        padding: 12px;
        text-align: left;
    }

    code:not(.language-markup) {
        border-radius: 2px;
        padding: 0.2rem;
        background-color: #f7f5f5;
        color: #000;
    }

    code.highlight {
        background-color: transparent;
        color: rgb(204, 57, 57);
    }
`

export default GlobalStyle
