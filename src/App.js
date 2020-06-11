import React ,{useState, useCallback, useRef, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import  PortfolioBG  from './components/PortfolioBG';
import ImgGridSystem from './components/ImgGridSystem';
import Menu from './components/Menu';
import About from './components/About';
import SwarmGroup from './components/InteractiveBG/SwarmGroup'


function App() {
 
  // let isAboutOpen =false;
  function refreshPage() {
    window.location.reload(true);
  }
  const [pageState, setPageState] = useState({
    isAboutOpen : false
  })

  const aboutPage = ()=>{
    setPageState({
      isAboutOpen:true
    })
  }

  const closeAboutPage = ()=>{
    setPageState({
      isAboutOpen:false
    })
  }


    // if(isAboutOpen){


    // } else if(!isAboutOpen){

    // }
    const mouse = useRef([0, 0])
    const onMouseMove = useCallback(({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), [])

  return (
    <div className="App"  onMouseMove={onMouseMove}>

      {/* <div className="menu"> 
          <div onClick={closeAboutPage} >most rencent project by Dan Ran</div>
        <div onClick={aboutPage}>about</div>
      </div> */}
        {/* <PortfolioBG /> */}
       
        <SwarmGroup mouse={mouse} isAbout={pageState.isAboutOpen} />

      <Menu onClickHome={closeAboutPage} onClickAbout={aboutPage} isAbout={pageState.isAboutOpen} />

      {!pageState.isAboutOpen?

      <div className="projectContentContainer">
      <div className="gridContainer"><ImgGridSystem /></div>
      </div>  
      :
      <>
      <About />
     
      
      </>
      
      }

     
       
      
      
      {/* <header className="App-header"> */}
    
      {/* <div className="gridContainer"><ImgGridSystem /></div> */}
      
        
       
      
      {/* </header> */}
    </div>
  );
}

export default App;
