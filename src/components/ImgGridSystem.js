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
        {id: 0, src: '/portfolio/assets/GridImg/Img2.jpg', title: 'WCMA', descriptions:"tqqqqqqghis adsd <br> sdf <b>sdads</b> adsqwewqrwqrwqrwq"},
        {id: 1, src: '/portfolio/assets/GridImg/Img3.jpg', title: 'MET', descriptions:'sdawr adsd sds ff sdadsadsqwewqrwqrwqrwq'},
        {id: 2, src: '/portfolio/assets/GridImg/Img4.jpg', title: 'TNC', descriptions:'wqex ff sdsfq'},
        {id: 3, src: '/portfolio/assets/GridImg/Img5.jpg', title: 'pj4', descriptions:'ffffff adsd sds fqrwqrwq'},
        {id: 4, src: '/portfolio/assets/GridImg/Img5.jpg', title: 'pjssss4', descriptions:'ffffff adsd sds fqrwqrwq'}
    ]; 
    // let isImgClicked = false;
    // let activeId ='';

    

    const [imgState, setImgState] = useState({
        isImgClicked:false,
        activeId: null
    })

    const openInfoHandler =(e)=>{
        // console.log("this was clicked");
        // console.log(e.target.getAttribute("imgid"))
       setImgState ({
           isImgClicked: true,
           activeId: e.target.getAttribute("imgid")
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



    let myObj;
    // useEffect(() => console.log(imgState));
    // useEffect(() => console.log(imgState.activeId));
    // useEffect(() => console.log(myObj));
      const openImageInformation = (currentState)=>{
        //   currentState = this.currentState;
          let imgId = currentState.activeId;
        //    myObj = imgList.find(x=>x.id===imgId)
          
          return (
              <>
              <div onClick={goBackHandler} className="goBack noselect">
              <div  className="goBackIcon"  />
              <b>back</b> 
              </div>
              
              {/* <div>this is image {imgId} </div> */}
              <PortfolioCotent contentId={imgId} title={imgList[imgId].title} content = {imgList[imgId].descriptions} />
            </>
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
                             imgsrc={myimg.src} 
                             title={myimg.title} 
                             content={myimg.descriptions} />
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