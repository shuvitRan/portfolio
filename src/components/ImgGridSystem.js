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
        {id: 0, src: 'wcma2.jpg', title: 'All AT ONCE - WCMA', partner:"Studio TheGreenEyl", category:"creative web app", descriptions:"tqqqqqqghis adsd <br> sdf <b>sdads</b> adsqwewqrwqrwqrwq"},
        {id: 1, src: 'TNC3.jpg', title: 'MEGA CITY',partner:"The Natrual Conservancy", category:"web app, interactive storytelling", descriptions:'wqex ff sdsfq'},
        {id: 2, src: 'ProductDesign.jpg', title: 'FIRIS', partner:"Cornell Start-up Studio", category:"ui/ux, product design, motion ",descriptions:'ffffff adsd sds fqrwqrwq'},
        {id: 3, src: 'MET2.png', title: 'MET',partner:"Metropolitan Museum of Art", category:"creative app", descriptions:'sdawr adsd sds ff sdadsadsqwewqrwqrwqrwq'},
        {id: 4, src: 'Peeq2.png', title: 'PEEQ',partner:"Peeq Data Inc", category:"ui/ux, motion, video", descriptions:'ffffff adsd sds fqrwqrwq'},
        {id: 5, src: 'Games2.jpg', title: 'BLUE DESERT DISCO', partner:"Wonderville Brooklyn", category:"game development, phsyical computing",descriptions:'ffffff adsd sds fqrwqrwq'}
    ]; 
    // let isImgClicked = false;
    // let activeId ='';

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
 
    
 
      
      let gridimg = null;
  
        gridimg=(// return (
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