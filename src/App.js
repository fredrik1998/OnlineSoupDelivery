import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './routes';
import appPage from "./appPage";
import Order from './components/Order';
import Track from './components/Track';

const App = () => {
  return (
  <Router>
    <Route exact path={ROUTES.APPPAGE} component={appPage} />
    <Route path={ROUTES.ORDER} component={Order}  />
    <Route path={ROUTES.TRACK} component={Track}/>
  </Router> 
  );
}
 
export default App;
