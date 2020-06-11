import React, { useRef, useState, useEffect }from 'react';
import ReactDOM from "react-dom";
// import React, {Suspense} from 'react-image'
// import {useImage} from 'react-image';
import GridImg  from './GridImg';
import PortfolioCotent from './PortfolioContent';
import {useSpring, animated} from 'react-spring'
// import gobackIcon from '../icons/chevron-left.svg';

const ImgGridSystem = ()=>{

   
    const fadeinAnimation = useSpring({opacity: 1, from: {opacity: 0}})

    let imgList = [
        {id: 0, src: '/portfolio/assets/GridImg/wcma2.jpg', title: 'All AT ONCE - WCMA', partner:"Studio TheGreenEyl", category:"creative app", descriptions:"tqqqqqqghis adsd <br> sdf <b>sdads</b> adsqwewqrwqrwqrwq"},
        {id: 1, src: '/portfolio/assets/GridImg/TNC3.jpg', title: 'MEGA CITY',partner:"The Natrual Conservancy", category:"web app, interactive storytelling", descriptions:'wqex ff sdsfq'},
        {id: 2, src: '/portfolio/assets/GridImg/MET2.png', title: 'MET',partner:"Metropolitan Museum of Art", category:"creative app", descriptions:'sdawr adsd sds ff sdadsadsqwewqrwqrwqrwq'},
        {id: 3, src: '/portfolio/assets/GridImg/Games2.jpg', title: 'BLUE DESERT DISCO', partner:"Wonderville Brooklyn", category:"game development, phsyical computing",descriptions:'ffffff adsd sds fqrwqrwq'},
        {id: 4, src: '/portfolio/assets/GridImg/Peeq2.png', title: 'PEEQ',partner:"Peeq Data Inc", category:"ui/ux, motion, video", descriptions:'ffffff adsd sds fqrwqrwq'},
        {id: 5, src: '/portfolio/assets/GridImg/ProductDesign.jpg', title: 'FIRIS', partner:"Cornell Start-up Studio", category:"ui/ux, product design ",descriptions:'ffffff adsd sds fqrwqrwq'}
    ]; 
    // let isImgClicked = false;
    // let activeId ='';

   
    const [imgState, setImgState] = useState({
        isImgClicked:false,
        activeId: null
    })

    const openInfoHandler =(e)=>{
        // console.log(e);
        // e.preventDefault();
        // console.log(e.target.getAttribute("imgid"))
       setImgState ({
           isImgClicked: true,
           activeId: e.currentTarget.getAttribute("imgid")
       })
    //    console.log(imgState)
    //    console.log(isImgClicked)
       
        
    }
    const goBackHandler =()=>{
        setImgState ({
            isImgClicked: false,
            activeId: null
        })
    }
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
 
   
      

    let myObj;
    // useEffect(() => console.log(imgState));
    // useEffect(() => console.log(imgState.activeId));
    // useEffect(() => console.log(myObj));
      const openImageInformation = (currentState)=>{
        //   currentState = this.currentState;
          let imgId = currentState.activeId;
        //    myObj = imgList.find(x=>x.id===imgId)
          
          return (
              <div >
               <div onClick={goBackHandler} className="goBack noselect">
               <div  className="goBackIcon"  />
               <b>back
            </b> 
                
               </div>
           
              <PortfolioCotent contentId={imgId} title={imgList[imgId].title} content = {imgList[imgId].descriptions} />
            </div>
          ) 

        

      }
 
      
      let gridimg = null;
      let projectContent = null;

    if(!imgState.isImgClicked ){
     
        gridimg=(// return (
           <div className="gridSystem"> 
            
            { imgList.map((myimg)=>{
            return (
                // <animated.div   style={fadeinAnimation}>
                    <GridImg key={myimg.id} 
                             projectId={myimg.id}   
                             onClick={openInfoHandler}   
                             
                             content={myimg} />
                        // </animated.div>
                        //  <img src={require(`${myimg.src}`)} alt="P1"/>  
                    )
            })}
            
           </div>
         )
    }else if(imgState.isImgClicked){
      
        
        projectContent = (
            < > 
                
                { openImageInformation(imgState) }
            </>
        )


    };




    return (
        <>
            {/* <div></div> */}
        {/* <div className="gridSystem">     */}
            {gridimg}
            {projectContent}
         {/* </div> */}
         </>
    );


}

export default ImgGridSystem ; 