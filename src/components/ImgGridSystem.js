import React, { useRef, useState, useEffect,useLayoutEffect }from 'react';
import ReactDOM from "react-dom";
// import React, {Suspense} from 'react-image'
// import {useImage} from 'react-image';
import GridImg  from './GridImg';
import PortfolioCotent from './PortfolioContent';
import {useSpring, animated} from 'react-spring';
import ReactGa from 'react-ga';
// import gobackIcon from '../icons/chevron-left.svg';

import {Route, NavLink, Switch} from 'react-router-dom';

//size Hook
function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}


const ImgGridSystem = (props)=>{

   
    const fadeinAnimation = useSpring({opacity: 1, from: {opacity: 0}})

    let imgList = [
        {id: 0, src: 'WCMA/WCMAHeader3.jpg', title: 'All AT ONCE - WCMA', partner:"Studio TheGreenEyl", category:"creative web app"},
        {id: 1, src: 'TNC/TNCHeader2.jpg', title: 'MEGA CITY',partner:"The Nature Conservancy", category:"web app, interactive storytelling"},
        {id: 2, src: 'Firis/FirisHeader2.jpg', title: 'FIRIS', partner:"Cornell Start-up Studio", category:"ui/ux, product design, motion "},
        {id: 3, src: 'Met/METHeader.png', title: 'MET',partner:"Metropolitan Museum of Art", category:"creative apps"},
        {id: 4, src: 'Peeq/PeeqHeader.jpg', title: 'PEEQ',partner:"Peeq Data Inc", category:"ui/ux, motion, video" },
        {id: 5, src: 'ASSORTED/assortedheader2.jpg', title: 'ASSORTED WORKS', partner:"Multiple Clients", category:"design, illustration"},
        {id: 6, src: 'WUWEI/wuweiheader2.jpg', title: 'WUWEI', partner:"Pablo's Birthday Gallery", category:"interactive installation art"},
        {id: 7, src: 'LVL/lvlheader.jpg', title: 'LVL++', partner:"Ann Street Gallery", category:"interactive installation art"},
        {id: 8, src: 'Games/GamesHeader2.jpg', title: 'BLUE DESERT DISCO', partner:"Wonderville Brooklyn", category:"game development, physical computing"}
        
    ]; 
    // let isImgClicked = false;
    // let activeId ='';
    const [animationCard, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 60 } }))
    // const trans = (x, y, s) => `perspective(1000px) scale(${s}) `;
    const trans2 = (x, y, s) => `perspective(2500px) rotateX(${x}deg) rotateY(${y}deg) scale(${s}) `;
    
    // const calc = (x, y) => [-(y - window.innerHeight / 2) / 150, (x - window.innerWidth / 2) / 150, 0.97]
    // const calc = (x, y) => [-((y - window.innerHeight / 2) / ( window.innerHeight/2))*3, ((x - window.innerWidth / 2)/ ( window.innerWidth/2))*3, 0.97]
    const [width, height] = useWindowSize();
    let calc;
        if(width>768){    
        calc = (x, y) => [-((y - window.innerHeight / 2) / ( window.innerHeight/2))*4, ((x - window.innerWidth / 2)/ ( window.innerWidth/2))*4, 0.97]
        } else{
            calc = (x, y) => [0, 0, 1]
        }
    // const calc = (x, y) => [-(y - element.clientHeight / 2) / 30, (x - element.clientHeight / 2) / 30, 0.9]
// const trans = (x, y, s) => `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s}) `;

    const cardref = useRef();


    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
 
    
 
      
      let gridimg = null;
  
        gridimg=(
          <animated.div 
          onMouseOver={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
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