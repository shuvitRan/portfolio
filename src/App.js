import React ,{useState, useCallback, useRef, useEffect} from 'react';
import './App.css';
import  PortfolioBG  from './components/PortfolioBG';
import ImgGridSystem from './components/ImgGridSystem';
import Menu from './components/Menu';
import About from './components/About';
import SwarmGroup from './components/InteractiveBG/SwarmGroup';
import ReactGa from 'react-ga';


function App() {
 
  // let isAboutOpen =false;
  function refreshPage() {
    window.location.reload(true);
  }
  const [pageState, setPageState] = useState({
    isAboutOpen : false,
    isHomeOpen:true
  })

  const aboutPage = ()=>{
    ReactGa.event({
      category:'About Page Button',
      action:'About page button is opened'
    });

    setPageState({
      isAboutOpen:true,
      isHomeOpen:false
    })
  }

  const closeAboutPage = ()=>{
    ReactGa.event({
      category:'Logo Button is Clicked',
      action:'About page is closed'
    });
    setPageState({
      isAboutOpen:false,
      isHomeOpen:true
    })
  }


  const ChangePageState=(NewValue)=>{

    setPageState({
      isAboutOpen:false,
      isHomeOpen:NewValue
    })

  }

  useEffect(()=>{
    ReactGa.initialize('UA-169847537-1')
    ReactGa.pageview(window.location.pathname+ window.location.search);
  })

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
      <>
      <div className="projectContentContainer">
        
      <div className="gridContainer"><ImgGridSystem pageState={ChangePageState} isHome={pageState.isHomeOpen}  /></div>
      </div>  
      
      </>
      :
      <>
      <About />
      <div className='footer'> <p> this website is built on React.js, Written by Dan Ran.</p></div>
      
      </>
      
      }

      

      
    </div>
  );
}

export default App;
