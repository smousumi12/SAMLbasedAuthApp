import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './login';
import Admin from './admin';
import Logout from './logout';

export default class App extends Component{
render()
{
  return(
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/admin" component={Admin}></Route>
          <Route exact path="/logout" component={Logout}></Route>
        </Switch>
      </div>
    </Router>
  )
}

}

