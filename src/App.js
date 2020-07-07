import React ,{useState, useCallback, useRef, useEffect, Suspense} from 'react';
import './App.css';
import  PortfolioBG  from './components/PortfolioBG';
import ImgGridSystem from './components/ImgGridSystem';
import Menu from './components/Menu';
// import About from './components/About';
import SwarmGroup from './components/InteractiveBG/SwarmGroup';
import ReactGa from 'react-ga';

import PortfolioCotent from './components/PortfolioContent';
import {Route, NavLink,Link, BrowserRouter,useHistory, Switch, HashRouter,withRouter} from 'react-router-dom';
const About = React.lazy(()=>import('./components/About'));


function App() {
 
  // let isAboutOpen =false;
  function refreshPage() {
    window.location.reload(true);
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

    <HashRouter > 
    
    <div className="App"  onMouseMove={onMouseMove}>

      {/* <div className="menu"> 
          <div onClick={closeAboutPage} >most rencent project by Dan Ran</div>
        <div onClick={aboutPage}>about</div>
      </div> */}
        {/* <PortfolioBG /> */}
       
      <SwarmGroup mouse={mouse} />
        
      <Menu />

    <Switch>

    <Route path='/About' exact>
        <Suspense fallback={null}>   
          <About />
          <div className='footer'> <p> this website is built on React.js, Written by Dan Ran.</p></div>              
        </Suspense>
      </Route>
    <Route exact path={'/:id/:name'}>
          {/* <div className="gridContainer"> */}
                       
                        <PortfolioCotent  />
                   
        {/* </div>   */}
    </Route>
    
        
 

      <Route path='/' >
            <ImgGridSystem  />
      </Route>
    
    </Switch>
      

      
    </div>
    
    </HashRouter>
  );
}

export default withRouter(App);
