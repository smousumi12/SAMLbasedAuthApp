import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';
import { render } from '@testing-library/react';

export default class admin extends Component{

    constructor(props){
        super(props)
            var saml= require('saml-encoder-decoder-js');
            var resultXml;
            var email;

            if(window.sessionStorage.getItem("id_token")){
                const existing_value= window.sessionStorage.getItem("id_token");
                email= existing_value.email;}
                else{
                    const currUrl= "Current Url= "+window.location.hash;
                    const access_token= currUrl.match(/#(?:id_token)=([\S\s]*?)&/)[1];

                    saml.decodeSamlPost(access_token,function(err,xml){
                        if(!err){
                            console.log("redirect decoded xml", xml);
                        }

                        resultXml= xml.replace("}{",",");
                        resultXml= (resultXml.split("}")[0]+"}");
                        const value= JSON.parse(resultXml);
                        email= value.email;

                        window.sessionStorage.setItem('id_token',xml);
                    });
                    

                    if(email==="smousumi3112@gmail.com"){
                        this.props.history.push("/admin")
                    }
                    else
                    this.props.history.push("/")
                }
            }
    
    render()
    {
        return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
              
                   <h1>This is the admin page, only authorised users allowed</h1>
                   <Link to="/logout">logout</Link>
               
              </header>
            </div>
          ) 
    }
}