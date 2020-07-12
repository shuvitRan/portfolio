import React, { useRef, useState, useEffect }from 'react';
import ReactDOM from "react-dom";
// import React, {Suspense} from 'react-image'
// import {useImage} from 'react-image';
import GridImg  from './GridImg';
import PortfolioCotent from './PortfolioContent';
import {useSpring, animated} from 'react-spring';
import ReactGa from 'react-ga';
// import gobackIcon from '../icons/chevron-left.svg';

import {Route, NavLink, Switch} from 'react-router-dom';

const ImgGridSystem = (props)=>{

   
    const fadeinAnimation = useSpring({opacity: 1, from: {opacity: 0}})

    let imgList = [
        {id: 0, src: 'WCMA/WCMAHeader.jpg', title: 'All AT ONCE - WCMA', partner:"Studio TheGreenEyl", category:"creative web app", descriptions:"tqqqqqqghis adsd <br> sdf <b>sdads</b> adsqwewqrwqrwqrwq"},
        {id: 1, src: 'TNC/TNCHeader.jpg', title: 'MEGA CITY',partner:"The Natrual Conservancy", category:"web app, interactive storytelling", descriptions:'wqex ff sdsfq'},
        {id: 2, src: 'Firis/FirisHeader.jpg', title: 'FIRIS', partner:"Cornell Start-up Studio", category:"ui/ux, product design, motion ",descriptions:'ffffff adsd sds fqrwqrwq'},
        {id: 3, src: 'MET/METHeader.png', title: 'MET',partner:"Metropolitan Museum of Art", category:"creative app", descriptions:'sdawr adsd sds ff sdadsadsqwewqrwqrwqrwq'},
        {id: 4, src: 'Peeq/PeeqHeader.jpg', title: 'PEEQ',partner:"Peeq Data Inc", category:"ui/ux, motion, video", descriptions:'ffffff adsd sds fqrwqrwq'},
        {id: 5, src: 'Games/GamesHeader.jpg', title: 'BLUE DESERT DISCO', partner:"Wonderville Brooklyn", category:"game development, phsyical computing",descriptions:'ffffff adsd sds fqrwqrwq'}
    ]; 
    // let isImgClicked = false;
    // let activeId ='';
    const [animationCard, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 60 } }))
    const trans = (x, y, s) => `perspective(1000px) scale(${s}) `;
    const trans2 = (x, y, s) => `perspective(2500px) rotateX(${x}deg) rotateY(${y}deg) scale(${s}) `;
    
    const calc = (x, y) => [-(y - window.innerHeight / 2) / 150, (x - window.innerWidth / 2) / 150, 0.95]
    // const calc = (x, y) => [-(y - element.clientHeight / 2) / 30, (x - element.clientHeight / 2) / 30, 0.9]
// const trans = (x, y, s) => `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s}) `;

    const cardref = useRef();


    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
 
    
 
      
      let gridimg = null;
  
        gridimg=(// return (
          <animated.div 
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: animationCard.xys.interpolate(trans2) }}> 
           <div className="gridSystem"> 
            
            { imgList.map((myimg)=>{
            return (
                
              
                    <GridImg key={myimg.id} 
                             projectId={myimg.id}   
                             content={myimg}
                             />
                       
                    )
            })}
          
           </div>
           </animated.div>
         )





    return (
        <>
            {/* <div></div> */}
        {/* <div className="gridSystem">     */}
        <div className="projectContentContainer">  
          <div className="gridContainer">
            {gridimg}
          </div>
        </div>
            {/* {projectContent} */}
         {/* </div> */}

      
        
         </>
    );


}

export default ImgGridSystem ; 