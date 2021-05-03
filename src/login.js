import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {withRouter} from 'react-router-dom';
import {authContext} from './config';

class login extends Component{

Constructor(props){
    this.SubmitForm = this.SubmitForm.bind(this);
}

SubmitForm=() =>{
    if(!window.sessionStorage.getItem("id_token")){
        do{
            authContext.login();}
            while(authContext.loginInProgress())

            }
            else{

             this.props.history.push("/admin");
            }
        }
    


render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <form onSubmit ={this.SubmitForm}>
           <h1>Click here to login</h1>
           <button type ="submit" className="button">Login</button>
       </form>
      </header>
    </div>
  )
}

}export default withRouter(login);