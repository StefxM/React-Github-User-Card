import React, { Component } from 'react';
import axios from "axios";
import './App.css';


import Followers from './followers';
import styled from "styled-components";
/*
## STEP 1 - Fetch the User Data

- When your component mounts, send a GET request to the following URL (replacing the palceholder with your Github name):
  - https://api.github.com/users/<your name>
- After you fetch your data, set it to state
*/


class App extends Component {
  constructor() {
    super();

    this.state = {
      user: []
     
    };
  }
 CardDeco = styled.div`
    border: 2px purple dotted;

`;
  ImgSizing = styled.img`
    height: 35%;
    width: 35%;
  `;

//axios call
componentDidMount() {
  axios
  .get('https://api.github.com/users/stefxm')
  .then(response => {
    console.log(response.data);
   this.setState({ user:response.data });
    })
    .catch(err => console.log(err));
}


//followers


render() {
  return (
  <div className="App">
    <this.CardDeco>
    <h1>{this.state.user.login}</h1>
    <this.ImgSizing src={this.state.user.avatar_url} alt="git pics"/>
    </this.CardDeco>
    <div className="Followers">
    <Followers followers={Followers}/>
    </div>
  </div>
  )
  }
}

export default App;
