import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import ProfileUser from './pages/ProfileUser';
// import ProfileOwner from './pages/ProfileOwner';
// import ProfileAdmin from './pages/ProfileAdmin';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <div className="App">
              <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
              </Switch>
        </div>
        </BrowserRouter>
    );
  }
}

export default App;