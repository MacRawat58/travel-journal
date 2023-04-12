import React from 'react';
import Navbar from './components/Navbar'
import Card from "./components/Card"
import data from "./data"

import './App.css';

function App() {

  
  let getData
  getData = data.map((item) => {
      return <Card
          {...item}
          />
      })
      console.log(getData);

  return (
    <div>
        <Navbar/>
        {getData}
    </div>
  );
}

export default App;
