import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './Profile';
import Layout from './Layout';
import NavBar from './NavBar';
import './App.css';

const App = props => {
  return (
    <Router>
      <div className='App'>
        <NavBar />
          <Switch>
            <Route path='/profile' component={Profile} />
            <Route path='/' component={Layout} />
          </Switch>
      </div>
    </Router>
  )
}

export default App;
