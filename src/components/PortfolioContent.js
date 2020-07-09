import React,{useEffect} from 'react';
import styles from './PortfolioContent.module.css';
import PortfolioData from './PortfolioData';
import ReactGa from 'react-ga';

import SplitText from "react-pose-text";
import TextFx from './TextFx';

import {useParams,useHistory,Redirect} from "react-router-dom"


// simple two columns content layout
const PortfolioCotent = (props)=>{
  

    let params=  useParams();
    // console.log(params.id)
  

    let eachContent = PortfolioData;
    // console.log(eachContent2[1])
    let eachContent2 =[
        {
            id: 0,
            title:"ALL AT ONCE",
            tools:"D3, Bootstrap, JQuery, OpenSeaDragon",
            descriptions:"All At Once invites an algorithmic, data-driven dive into WCMA’s collection. Developed by Studio TheGreenEyl, a design and research practice, the project presents WCMA’s collection as a whole, seen from a new perspective, and allows new adjacencies and connections to come to the fore.",
            imgFolder:"WCMA", 
            imgsScrs:["1.png", "2.png","3.png", "4.png", "5.png"],
            videoLink:['https://player.vimeo.com/video/428276309'],
            videoTop: true
        },
        {
            id: 1, 
            title:"Shenzhen: The Growth and Livability of a Mega City ",
            tools:"Vue.js, Nuxt.js, Mapbox GL JS & Studio, D3.js, Scrollama, and Baidu Map API.",
            descriptions:"This is a web interactive storytelling project associate with <b>The Nature Conservancy: Shenzhen</b>. It is also the thesis project in partial fulfillment of the requirements for the degree of Master of Science in Data Visualization, at <b>Parsons School of Design</b>.<br><br>Shenzhen, known as China's booming silicon valley today, used to be a small fish town 40 years ago. Today, it ranks one of the top mega-cities in China and leading examples of urbanization in developing countries. By looking at Shenzhen, we could learn about the challenges that come with rapid growth and learn to build our city better.<br>",
            button:['https://shuvitran.github.io/szapp/'],
            buttonName:['visit project'],
            imgFolder:"TNC", 
            imgsScrs:["1.png", "2.jpg","3.jpg", "4.jpg",'5.jpg','6.jpg','7.jpg'],
            videoLink:['https://player.vimeo.com/video/420423868'],
            videoTop: true
        },
        {
            id: 2, 
            title:"MET",
            tools:"D3, DeepAR SDK, p5.js, OpenCV, Python, Numpy, Pandas",
            descriptions:"",
            imgFolder:"Met",
            button:['https://shuvitran.github.io/MetPartnershipProjectsDoc/BuddhasAtTheMet/','https://shuvitran.github.io/MetPartnershipProjectsDoc/MetMasquerade/','https://shuvitran.github.io/MetPartnershipProjectsDoc/WhatAreTheyPainting/','https://shuvitran.github.io/MetPartnershipProjectsDoc/LetTheMusicPlay/'], 
            buttonName:['Buddhas At The Met', 'Met Masquerade', 'What Are They Painting','Let The Music Play' ],
         
            imgsScrs:["1.jpg", "2.jpg","3.jpg",'4.jpg'],
            // videoLink:['https://player.vimeo.com/video/379099271','https://player.vimeo.com/video/378957942','https://player.vimeo.com/video/378954055','https://player.vimeo.com/video/379094736/'],
            videoTop: false
        },
        {
            id: 3, 
            title:"Blue Desert Disco",
            tools:"Unity, C#, Game Design & Development, Physical Computing, Arduino",
            descriptions:"Blue Desert Disco is a 2-3 player fighting digital game in which each gamer has their own custom 3D print controller paired with a specific character in the game. Each character has their own unique “weapon” that reflects on their corresponding controller. Their speed and strengths also vary from each other. The controllers are identical in their overall shape but different in the reflective device/components of the characters’ abilities. The players have to adapt to the controller and figure out their own way to play quickly, and meanwhile, defeats the other players. The winner, of course, has the dance floor all to herself/himself.",
            imgFolder:"Games", 
            imgsScrs:['1.jpg','2.jpg','3.jpg'],
            button:['https://vimeo.com/376450826','https://vimeo.com/370009707'],
            buttonName:['Early Stage Blue Desert Disco','more game Love You Away'],
            videoLink:['https://player.vimeo.com/video/378023986'],
            videoTop: true
        },
        {
            id: 4,    
            title:"Peeq",
            tools:"UI & UX, Interaction Design, Motion Graphics",
            descriptions:"Peeq Data is a technology start-up company based in the San Francisco Bay Area. Peeq IOS app is a smart mobile multi-angle camera and editing system which can auto-generate highlight videos.<br><br>I was a full-time motion and interaction designer at Peeq Data, Inc. Responsible for design related activities including creating motion graphics and processing video, user interface and user experience of the website and mobile applications.<br><br>I was in charge of design interaction motion template and video sample for the Peeq app and its video product. The clients of our video products include Dew NBA, SteveNash Foundation, Drew League, and WorkForce Athletics.  As a member of the Peeq design team, I worked on the app UI/UX design, Peeq website design and its development. One of the video samples that I created was shown on Discovery channel Daily Planet Show which featuring Peeq on December 2017.<br><br>The Peeq Demo video can be viewed at the bottom of the page.",
            imgFolder:"Peeq", 
            imgsScrs:["1.jpg", "2.jpg","3.gif","4.gif","5.png"],
            videoLink:['https://player.vimeo.com/video/310027671']
        },
        {
            id: 5,    
            title:"Firis App Design",
            tools:"UI & UX, Interaction Design, Motion Graphics",
            descriptions:"",
            imgFolder:"Firis", 
            imgsScrs:["Artboard.jpg", "2.jpg","FirisMotion.gif","3.jpg","ironduan.gif"],
            videoLink:['https://player.vimeo.com/video/310027671']
        }
        
    ];
   

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
      }, [])

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


        if(!(eachContent[params.id])) {
            return <Redirect to="/404" />
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

export default PortfolioCotent; 