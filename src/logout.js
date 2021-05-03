import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';

export default class logout extends Component{
render()
    {
        return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
              
                   <h1>user logged out</h1>
                   <Link to="/">login again </Link>
               
              </header>
            </div>
          ) 
    }
}