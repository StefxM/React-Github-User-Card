import React from 'react';
import axios from "axios";
import './App.css';

/*
## STEP 1 - Fetch the User Data

- When your component mounts, send a GET request to the following URL (replacing the palceholder with your Github name):
  - https://api.github.com/users/<your name>
- After you fetch your data, set it to state
*/


function App() {
//axios call
axios.get('https://api.github.com/users/stefxm')
  .then( response => {
    console.log(response.data);   
    })

  return (
    <div className="App">
      <header className="App-header">
       <p>
         Hiiii JAY AND AVERIEEEE
          MOMMY LOVES YOUUUUUU

       </p>
      </header>
    </div>
  );
}

export default App;
