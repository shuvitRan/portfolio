import React,{useEffect} from 'react';
import styles from './PortfolioContent.module.css';
import PortfolioData from './PortfolioData';
import ReactGa from 'react-ga';

import SplitText from "react-pose-text";
import TextFx from './TextFx';

import {useParams,useHistory,Redirect} from "react-router-dom"


// simple two columns content layout
const PortfolioCotentV2 = (props)=>{
  

    let params=  useParams();
    // console.log(params.id)
  

    let eachContent = PortfolioData;
    // console.log(eachContent2[1])

   

    let history = useHistory();
    const goBackHandler =()=>{
      ReactGa.event({
          category:'GoBack Button is Clicked',
          action:`BackToHome`
        });
        history.push("/");
  
  
  }


    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

      if(!(eachContent[params.id])) {
        return <Redirect to="/404" />
    }

    let videoShow ;
        if(eachContent[params.id] && typeof eachContent[params.id].videoLink!='undefined'){
        //    videoShow=  (<iframe src={`${eachContent[props.contentId].videoLink}?autoplay=1&loop=1&title=0&byline=0&portrait=0`} width="640" height="330" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>)
           videoShow=  (
            <div>  
            {eachContent[params.id].videoLink.map((eachVideo, index)=>{
            return(
            <div key={"video"+index} className={styles.h_iframe}> 
             <iframe src={`${eachVideo}?autoplay=0&loop=1&title=0&byline=0&portrait=0`} frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
             </div>
             )
           })
           }
           </div>
         )
        }
   


    let imgsShow; 
        if (eachContent[params.id]&& typeof eachContent[params.id].imgsScrs!='undefined'){
            imgsShow = (
                <>
                { eachContent[params.id].imgsScrs.map((eachImg,index)=>{
                    return (
                        <img key={"content"+index} src={`/assets/projectImgs/${eachContent[params.id].imgFolder}/${eachImg}`} />
                    )

                })

                }
                </>
            )
        }

        let ImgNVideo;
        if(eachContent[params.id]&& eachContent[params.id].videoTop!='undefined' && eachContent[params.id].videoTop){
            ImgNVideo=(
                <>
                {videoShow}
                {imgsShow}
                </>
            )

        } else {
            ImgNVideo=(
                <>
                {imgsShow}
                {videoShow}
                </>
            )
        }

        let buttonToWeb=null;
        if(eachContent[params.id]&& eachContent[params.id].button!='undefined'&&eachContent[params.id].button){
            buttonToWeb =(
            <div>
                {eachContent[params.id].button.map((eachButton,index)=>{
                    return(
                        <div  key={"buttonout"+index} className={styles.buttonToWeb}>
                             <ReactGa.OutboundLink
                                        eventLabel={eachContent[params.id].buttonName[index]+" Button Clicked"}
                                        to={eachButton}
                                        target="_blank"
                                        trackerNames={['tracker2']}
                                        
                                    >
                                        
                                        &nbsp;&gt; {eachContent[params.id].buttonName[index]}
                                        
                                        </ReactGa.OutboundLink>
                        {/* <a target="_blank" href={eachButton}> &nbsp;&gt; {eachContent[props.contentId].buttonName[index]}</a> */}
                        </div>

                        
                    )
                })
            }

            </div>)
            
        }


    

    return (
<>
<div >
            <div onClick={goBackHandler} className="goBack noselect">
            <div  className="goBackIcon"  />
            <b> back </b>                 
            </div>
            </div>
<div className="projectContentContainer">  
          <div className="gridContainer">
       
        <div className={styles.contentContainer}>
            <div className={styles.imgList}>
            {ImgNVideo}
            
            </div>
            <div className={styles.descriptionBar}>
                <h1>
                <SplitText initialPose="exit" pose="enter" charPoses={TextFx}>
                    {eachContent[params.id].title}
                 </SplitText>   
                </h1>
                <span> <b className={styles.toolList}> 
                    <SplitText initialPose="exit" pose="enter" charPoses={TextFx}>
                    {eachContent[params.id].tools}
                    </SplitText>
                    </b></span>
                <p className={styles.descriptionText} dangerouslySetInnerHTML={{__html: eachContent[params.id].descriptions}}> 
                    
                </p>
                {buttonToWeb}
                
            </div>
        </div>
</div> 
</div>
</>
    )
}

export default PortfolioCotentV2; 