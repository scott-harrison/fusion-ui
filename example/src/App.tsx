import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'
import { Grid, Row, Column } from 'fusion-ui'

import SideNav from './components/SideNav'
import OverviewPage from './pages/Overview'
import GridPage from './pages/Grid'
import ButtonPage from './pages/Button'
import CardPage from './pages/Card'
import InputPage from './pages/Input'

const App = () => (
    <Grid full>
        <Row>
            <Column sm={12} md={4} lg={3} xl={2}>
                <SideNav />
            </Column>
            <Column sm={12} md={8} lg={9} xl={10}>
                <Router>
                    <Switch>
                        <Route
                            path="/components/overview"
                            exact
                            render={OverviewPage}
                        />
                        <Route
                            path="/components/grid"
                            exact
                            render={GridPage}
                        />
                        <Route
                            path="/components/button"
                            exact
                            render={ButtonPage}
                        />
                        <Route
                            path="/components/card"
                            exact
                            render={CardPage}
                        />
                        <Route
                            path="/components/input"
                            exact
                            render={InputPage}
                        />
                        <Redirect to="/components/overview" />
                    </Switch>
                </Router>
            </Column>
        </Row>
    </Grid>
)
export default App
