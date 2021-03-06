import React ,{useState, useCallback, useRef, useEffect, Suspense} from 'react';
import './App.scss';
// import './_base.scss';
import { useSpring, animated } from 'react-spring'

// import ImgGridSystem from './components/ImgGridSystem';
import Menu from './components/Menu';
// import About from './components/About';
import SwarmGroup from './components/InteractiveBG/SwarmGroup';
import ReactGa from 'react-ga';

// import PortfolioCotent from './components/PortfolioContentV2';
import {Route, NavLink,Link, BrowserRouter,useHistory, Switch, HashRouter,withRouter} from 'react-router-dom';

const ImgGridSystem = React.lazy(()=>import('./components/ImgGridSystem'));
const PortfolioCotent = React.lazy(()=>import('./components/PortfolioContentV2'));
const About = React.lazy(()=>import('./components/About'));
const ErrorPage = React.lazy(()=>import('./components/ErrorPage'));

function App() {
 
  // let isAboutOpen =false;
  function refreshPage() {
    window.location.reload(true);
  }


  useEffect(()=>{
    ReactGa.initialize('UA-169847537-1')
    // const page = window.location.pathname;
    // const hash = window.location.hash;
    // console.log(hash)
    // ReactGa.pageview(window.location.pathname+ window.location.search);
    ReactGa.pageview(window.location.hash+ window.location.search);
    // ReactGa.pageview(page)
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
       
      <SwarmGroup mouse={mouse} />
        
      <Menu />

    <Switch>

    <Route path='/About' exact>
        <Suspense fallback={null}>   
          <About />
          <div className='footer'> <p> this website is built on React.js, Written by Dan Ran.</p></div>              
        </Suspense>
      </Route>
    <Route path={'/:id/:name'} exact>
          {/* <div className="gridContainer"> */}
          <Suspense fallback='null'>  
                        <PortfolioCotent  />
          </Suspense>
        {/* </div>   */}
    </Route>
    
        

    
      <Route path='/' exact>
      <Suspense fallback={<h1>Loading</h1>}>    
            <ImgGridSystem mouse={mouse}  />
            </Suspense>
      </Route>
      
   
      <Route path="*">
      <Suspense fallback='null'>
        <ErrorPage />        
      </Suspense>
          </Route>
    
    </Switch>
      

      
    </div>
    
   
  );
}

export default withRouter(App);
