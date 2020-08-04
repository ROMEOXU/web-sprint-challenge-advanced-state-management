import React from "react";
import {SmurfProvider} from './context';
import "./App.css";
import Form from './Form';
import SmurfList from './SmurfList';
function App() {
   
  return (
    <SmurfProvider>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        
        <Form />
        <SmurfList />
      </div>
    </SmurfProvider>
    );
  }


export default App;

