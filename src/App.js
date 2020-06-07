import React from 'react';
import logo from './logo.svg';
import './App.css';
import  PortfolioGrid  from './PortfolioGrid';
import ImgGridSystem from './components/ImgGridSystem';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}

      <div className="gridContainer"><ImgGridSystem /></div>
      
        {/* <PortfolioGrid /> */}
       
      
      {/* </header> */}
    </div>
  );
}

export default App;
