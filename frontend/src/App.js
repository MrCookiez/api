import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <div className="App">
              <Switch>
                <Route path='/' component={Home} exact>HOME</Route>
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/welcome' component={Welcome} />
              </Switch>
        </div>
        </BrowserRouter>
    );
  }
}

export default App;