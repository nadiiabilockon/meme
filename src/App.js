import React, { Component } from 'react';
import MemeGenerator from './components/MemeGenerator'
import Header from './components/Header'


function App () {
  return(
    <div >
      <div className="background">
        <Header />
      </div>
        <MemeGenerator/>
    </div>
  )
}

export default App;

