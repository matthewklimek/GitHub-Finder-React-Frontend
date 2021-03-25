import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './compnents/layouts/Navbar';
import MyAlert from './compnents/layouts/Alert';
import Home from './compnents/pages/Home';
import About from './compnents/pages/About';
import NotFound from './compnents/pages/NotFound';
import User from './compnents/users/User';
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'
import './custom.scss';

const App = () => {

  return (
    <GithubState>
      <AlertState>
    <Router>
   <div className="App">
     <Navbar title="Github Finder"/>
     <div className="container">
     <MyAlert alert={alert}/>
     <Switch>
       <Route exact path = '/' component= {Home}/>
       <Route exact path = '/about' component={About}/>
       <Route exact path = '/user/:login'  component={User}/>
       <Route component={NotFound} />
     </Switch>
     </div>
   </div>
   </Router>
   </AlertState>
   </GithubState>
  );
  
}

export default App;
