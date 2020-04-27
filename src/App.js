import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './config/routes';

const App = () => (
  <BrowserRouter>
    <Switch>
      {routes.map(((route) => (
        <Route
          exact
          key={route.name}
          path={route.path}
          component={route.component}
        />
      )))}
    </Switch>
  </BrowserRouter>
);

export default App;
