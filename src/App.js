import React ,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import  PortfolioGrid  from './components/PortfolioGrid';
import ImgGridSystem from './components/ImgGridSystem';
import Menu from './components/Menu';
import About from './components/About'


function App() {
 
  // let isAboutOpen =false;
  function refreshPage() {
    window.location.reload(false);
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


  return (
    <div className="App">

      {/* <div className="menu"> 
          <div onClick={closeAboutPage} >most rencent project by Dan Ran</div>
        <div onClick={aboutPage}>about</div>
      </div> */}
      <Menu onClickHome={closeAboutPage} onClickAbout={aboutPage} isAbout={pageState.isAboutOpen} />

      {!pageState.isAboutOpen?
      <div className="gridContainer"><ImgGridSystem /></div>
      :
      
      <About />
      
      
      }
      
      
      {/* <header className="App-header"> */}
      {/* <PortfolioGrid /> */}
      {/* <div className="gridContainer"><ImgGridSystem /></div> */}
      
        
       
      
      {/* </header> */}
    </div>
  );
}

export default App;
