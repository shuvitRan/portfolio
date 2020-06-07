import React, { useRef, useState, useEffect }from 'react';
import ReactDOM from "react-dom";
// import React, {Suspense} from 'react-image'
// import {useImage} from 'react-image';
import GridImg  from './GridImg';
import PortfolioCotent from './PortfolioContent';

const ImgGridSystem = ()=>{

    let imgList = [
        {id: 1, src: '/portfolio/assets/GridImg/Img2.jpg', title: 'WCMA', descriptions:'tqqqqqqghis adsd sdf sdadsadsqwewqrwqrwqrwq'},
        {id: 2, src: '/portfolio/assets/GridImg/Img3.jpg', title: 'MET', descriptions:'sdawr adsd sds ff sdadsadsqwewqrwqrwqrwq'},
        {id: 3, src: '/portfolio/assets/GridImg/Img4.jpg', title: 'TNC', descriptions:'wqex ff sdsfq'},
        {id: 4, src: '/portfolio/assets/GridImg/Img5.jpg', title: 'pj4', descriptions:'ffffff adsd sds fqrwqrwq'},
        {id: 5, src: '/portfolio/assets/GridImg/Img5.jpg', title: 'pjssss4', descriptions:'ffffff adsd sds fqrwqrwq'}
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
    let myObj;
    useEffect(() => console.log(imgState));
    useEffect(() => console.log(imgState.activeId));
    useEffect(() => console.log(myObj));
      const openImageInformation = (currentState)=>{
        //   currentState = this.currentState;
          let imgId = currentState.activeId-1;
        //    myObj = imgList.find(x=>x.id===imgId)
          console.log(myObj)
          return (
              <>
              {/* <div>this is image {imgId} </div> */}
              <PortfolioCotent  title={imgList[imgId].title} content = {imgList[imgId].descriptions} />
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
                    <GridImg key={myimg.id} 
                             projectId={myimg.id}   
                             onClick={openInfoHandler}   
                             imgsrc={myimg.src} 
                             title={myimg.title} 
                             content={myimg.descriptions} />
                        
                        //  <img src={require(`${myimg.src}`)} alt="P1"/>  
                    )
            })}
            </div>
         )
    }else if(imgState.isImgClicked){
        
        projectContent = (
            <>
                 
            { openImageInformation(imgState) }
             </>
        )


    };




    return (
        <>
        {/* <div className="gridSystem">     */}
            {gridimg}
            {projectContent}
         {/* </div> */}
         </>
    );


}

export default ImgGridSystem ; 