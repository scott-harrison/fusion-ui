import styled from 'styled-components'

const StickyNav = styled.div`
    position: -webkit-sticky;
    position: sticky;
    top: 10px;
    display: block !important;
    height: calc(100vh - 7rem);
    padding-left: 0.25rem;
    margin-left: -0.25rem;
    overflow-y: auto;
`

const Title = styled.div`
    margin: 1.5rem 0 0.2rem;
    padding: 0.4rem 0.5rem;
    color: rgba(0, 0, 0, 0.65);
`

const SideNav = () => {
    return (
        <StickyNav className="fui-sidebar">
            <ul>
                <li>
                    <a href="/components/overview">Components Overview</a>
                </li>
                <li>
                    <Title>General</Title>
                </li>
                <li>
                    <a href="/components/grid">Grid System</a>
                </li>
                <li>
                    <a href="/components/button">Button</a>
                </li>
                <li>
                    <a href="/components/card">Card</a>
                </li>
                <li>
                    <Title>Data Entry</Title>
                </li>
                <li>
                    <a href="/components/input">Input</a>
                </li>
            </ul>
        </StickyNav>
    )
}

export default SideNav
