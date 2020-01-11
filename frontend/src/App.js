import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './config/routes.js';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <div className="App">
              <Switch>
                {routes.map((route => (
                  <Route
                    exact
                    key={route.name}
                    path={route.path}
                    component={route.component}
                  />
                )))}
              </Switch>
        </div>
        </BrowserRouter>
    );
  }
}

export default App;