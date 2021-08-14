import { BrowserRouter as Router, Route } from "react-router-dom";
import { Grid, Row, Column } from 'fusion-ui';

import SideNav from "./components/SideNav";
import OverviewPage from './pages/Overview';
import GridPage from './pages/Grid';
import ButtonsPage from './pages/Buttons';

const App = () => {
  return (
    <Grid full={true}>
      <Row>
        <Column xs={12} md={3}>
          <SideNav />
        </Column>
        <Column xs={12} md={9}>
          <Router>
              <Route path="/components/overview" exact render={OverviewPage} />
              <Route path="/components/grid" exact render={GridPage} />
              <Route path="/components/buttons" exact render={ButtonsPage} />
          </Router>
        </Column>
      </Row>
    </Grid>
  );
}
export default App