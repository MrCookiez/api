import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProfileUser from './pages/ProfileUser';
import ProfileOwner from './pages/ProfileOwner';
import ProfileAdmin from './pages/ProfileAdmin';
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
                <Route path='/profile-user' component={ProfileUser} />
                <Route path='/profile-owner' component={ProfileOwner} />
                <Route path='/profile-admin' component={ProfileAdmin} />
              </Switch>
        </div>
        </BrowserRouter>
    );
  }
}

export default App;