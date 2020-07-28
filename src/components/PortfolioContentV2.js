import React,{useEffect} from 'react';
import styles from './PortfolioContentV2.module.scss';                      
import PortfolioData from './PortfolioDatav2';
import ReactGa from 'react-ga';

import SplitText from "react-pose-text";
import TextFx from './TextFx';
import TextFx2 from './TextFx2';

import {useParams,useHistory,Redirect} from "react-router-dom";
import LazyLoad from 'react-lazyload';


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

    let imgHeader;
    if (eachContent[params.id]&& typeof eachContent[params.id].header!='undefined'){
        imgHeader = (
            <LazyLoad height={200}>
            <div className={styles.imgHeader}>
                    <img  src={`/assets/projectImgs/${eachContent[params.id].imgFolder}/${eachContent[params.id].header}`} />
                
            </div>
            </LazyLoad>
        )
    }
    let Role;
    if(eachContent[params.id].role&&eachContent[params.id].role!='undefined'){
        Role=(
           <span>  
           <b>
                
               <SplitText initialPose="exit" pose="enter" charPoses={TextFx}>
                 ROLE
               </SplitText>
              
           </b> 
           {eachContent[params.id].role.map((theRole, index)=>{
           return(
           <div key={"Role"+index} > 
           <SplitText initialPose="exit" pose="enter" charPoses={TextFx}>
           {theRole}
           </SplitText>
            </div>
            )
          })
          }
          </span>
       )
   }
   let Tools;
   if(eachContent[params.id].tools!='undefined'){
    Tools=(
          <span>  
             
          <b>
                 <SplitText initialPose="exit" pose="enter" charPoses={TextFx}>
                     SKILLS
                 </SplitText>
          </b> 
          {eachContent[params.id].tools.map((thisTools, index)=>{
          return(
          <div key={"thisTools"+index} > 
          <SplitText initialPose="exit" pose="enter" charPoses={TextFx}>
            {thisTools} 
            </SplitText>
           </div>
           )
         })
         }
      
         </span>
      )
  }

  let buttonToWeb=null;
  if(eachContent[params.id].button&&eachContent[params.id].button!='undefined'&&eachContent[params.id].button.length>0){
      buttonToWeb =(
      <span>
          <b>
          <SplitText initialPose="exit" pose="enter" charPoses={TextFx}>
              LINK
          </SplitText>
          </b>
          {eachContent[params.id].button.map((eachButton,index)=>{
              return(
                  <div  key={"buttonout"+index} className={styles.buttonToWeb}>
                       <ReactGa.OutboundLink
                                  eventLabel={eachContent[params.id].buttonName[index]+" Button Clicked"}
                                  to={eachButton}
                                  target="_blank"
                                  trackerNames={['tracker2']}
                                  
                              >
                                  
                                  {/* &nbsp;&gt; {eachContent[params.id].buttonName[index]} */}
                                  <SplitText initialPose="exit" pose="enter" charPoses={TextFx}> 
                                        {eachContent[params.id].buttonName[index]}
                                  </SplitText>
                                    
                                  
                                  </ReactGa.OutboundLink>
                  {/* <a target="_blank" href={eachButton}> &nbsp;&gt; {eachContent[props.contentId].buttonName[index]}</a> */}
                  </div>

                  
              )
          })
      }

      </span>)
      
  }



    let mainInfo;
    if (eachContent[params.id]){
        mainInfo = (
            
            <div className={styles.mainLayout}>
                <LazyLoad height={200}>
                    <h1>
                        <SplitText initialPose="exit" pose="enter" charPoses={TextFx}>
                            {eachContent[params.id].title}
                        </SplitText>   
                    </h1>
                    </LazyLoad>
                   
                    <div className={styles.textLayout}>
                        {/* <p className={styles.descriptionText} dangerouslySetInnerHTML={{__html: eachContent[params.id].descriptions}} /> */}
                        <div className={styles.descriptionText}> 
                            <SplitText initialPose="exit" pose="enter" charPoses={TextFx2}>
                            {eachContent[params.id].descriptions}
                            </SplitText>
                        </div>
                        <LazyLoad height={300}>
                        <span className={styles.categoryColumns}>
                        {Role}
                        {Tools}
                        {buttonToWeb}
                        </span>
                        </LazyLoad>

                    </div>
             
            </div>
        )
    }
 
let imgSection;

if (eachContent[params.id]&& typeof eachContent[params.id].imgsSection!='undefined'){
    imgSection = (
        <>
        { eachContent[params.id].imgsSection.map((eachImg,index)=>{
            return (
                <div className={styles.imgSecLayout} key={"content"+index}>
                <LazyLoad height={200}>
                <img  src={`/assets/projectImgs/${eachContent[params.id].imgFolder}/${eachImg.img}`} />
                </LazyLoad>    
                {eachImg.des&&typeof eachImg.des!='undefined'
                ?<div className={styles.imgDes}>
                    {/* <p  dangerouslySetInnerHTML={{__html: eachImg.des}} />  */}
                    <LazyLoad height={200}>
                    <SplitText initialPose="exit" pose="enter" charPoses={TextFx}>
                    {eachImg.des}
                    </SplitText>
                    </LazyLoad>
                    </div>
                :<></>
                }
                {eachImg.title&&typeof eachImg.title!='undefined'
                ? <div className={styles.DescriptionWithTitle}>
                    {/* <h1 dangerouslySetInnerHTML={{__html: eachImg.title}} /> */}
                    <h1>
                        <SplitText initialPose="exit" pose="enter" charPoses={TextFx}>
                            {eachImg.title}
                        </SplitText>   
                    </h1>
                    <span className={styles.textLayout}>
                    <LazyLoad height={300}>
                    
                    <SplitText initialPose="exit" pose="enter" charPoses={TextFx2}>
                        {/* <p  dangerouslySetInnerHTML={{__html: eachImg.text}} />  */}
                        {eachImg.text}
                    </SplitText>
                    
                     </LazyLoad>
                     </span>
                    
                   
                  </div>
                :<></>
                }
                {eachImg.text&&typeof eachImg.text!='undefined'&&typeof eachImg.title=='undefined'
                ?<div className={styles.textLayout}>
                    {/* <p className={styles.moreDescriptionText} dangerouslySetInnerHTML={{__html: eachImg.text}} />  */}
                    <div className={styles.moreDescriptionText} >
                    <LazyLoad height={300}>
                    <SplitText initialPose="exit" pose="enter" charPoses={TextFx2}>
                    {eachImg.text}
                    </SplitText>
                    </LazyLoad>
                    </div>
                    
                </div>
                :<></>
                }
                </div>
            )

        })

        }
        </>
    )
}



    let videoShow ;
        if(eachContent[params.id] && typeof eachContent[params.id].videoLink!='undefined'){
        //    videoShow=  (<iframe src={`${eachContent[props.contentId].videoLink}?autoplay=1&loop=1&title=0&byline=0&portrait=0`} width="640" height="330" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>)
           videoShow=  (
            <div className={styles.videoContainer}>  
            <div className={styles.videoTitle}>
                <h1>
                <LazyLoad height={200}>
                <SplitText initialPose="exit" pose="enter" charPoses={TextFx}>
                            {eachContent[params.id].videoName}
                </SplitText>   
                </LazyLoad>
                </h1>
                
            </div>
                
            
            {eachContent[params.id].videoLink.map((eachVideo, index)=>{
            return(
            <div key={"video"+index} className={styles.h_iframe}> 
              <LazyLoad height={200}>
             <iframe src={`${eachVideo}?autoplay=0&loop=1&title=0&byline=0&portrait=0`} frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
             </LazyLoad>
             </div>
             )
           })
           }
           </div>
         )
        }
    
  
        let ImgNVideo;
        if(eachContent[params.id]&& eachContent[params.id].videoTop!='undefined' && eachContent[params.id].videoTop){
            ImgNVideo=(
                <>
                 {videoShow}
                {imgSection}
           
                </>
            )

        } else {
            ImgNVideo=(
                <>
                       {imgSection}
            {videoShow}
            
                </>
            )
        }






    

    return (
<>

         

<div className={styles.containerWrap}>
        <div className={styles.contentContainer}>
       
        <div onClick={goBackHandler} className={[styles.goBack, "noselect"].join(' ')} >
            <div  className={styles.goBackIcon}  />
            {/* <b>BACK</b>                  */}
        </div>
       
            {imgHeader}
            {mainInfo}
            {ImgNVideo}
            
   
        </div>
    </div>

</>
    )
}

export default PortfolioCotentV2; 