import React from 'react'
import './App.css';
import { SearchPhoto } from './SearchPhoto';
//import axios from 'axios'
function App() {
  return (
    <div className="App">
      <div className="container">
      <h1 className="title">UNSPLASH   API</h1>
      <SearchPhoto/>
      </div>
      

    </div>
  );
}

export default App;
