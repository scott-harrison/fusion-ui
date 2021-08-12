import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { GridContainer, GridRow, GridColumn } from 'fusion-ui'
import Overview from './pages/Overview';
import SideNav from './components/SideNav';
import GridPage from './pages/Grid';
import ButtonsPage from './pages/Buttons';

const App = () => {
  return (
    <GridContainer full>
		<GridRow>
			<GridColumn xs={12} md={2}>
				<SideNav />
			</GridColumn>
			<GridColumn xs={12} md={10}>
				<Router>
       				<Route path="/components/overview" exact render={Overview} />
       				<Route path="/components/grid" exact render={GridPage} />
       				<Route path="/components/buttons" exact render={ButtonsPage} />
			    </Router>
			</GridColumn>
		</GridRow>
    </GridContainer>
  );
}
export default App
