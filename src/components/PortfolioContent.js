import React from 'react';
import styles from './PortfolioContent.module.css';






const PortfolioCotent = (props)=>{

    let eachContent =[
        {
            id: 0,
            title:"ALL AT ONCE",
            tools:"JQuery, D3, OpenSeaDragon",
            descriptions:"",
            imgFolder:"WCMA", 
            imgsScrs:["1.png", "2.png","3.png", "4.png"],
            
        },
        {
            id: 1, 
            title:"The Growth and Livability in a Mega City ",
            tools:"Vue.js, Nuxt.js, D3, MapBox",
            descriptions:"",
            imgFolder:"TNC", 
            imgsScrs:["1.jpg", "2.jpg","3.jpg", "4.jpg"],
            videoLink:['https://player.vimeo.com/video/420423868']
        },
        {
            id: 2, 
            title:"MET",
            tools:"D3, p5.js, OpenCV, Python, Numpy, Pandas",
            descriptions:"",
            imgFolder:"Met", 
            imgsScrs:["1.png", "2.png","3.png"],
            videoLink:['https://player.vimeo.com/video/379099271']
        },
        {
            id: 3, 
            title:"Peeq",
            tools:"UI & UX, Interaction Design, Motion Graphics",
            descriptions:"",
            imgFolder:"Peeq", 
            imgsScrs:["1.jpg", "2.jpg","3.gif","4.gif","5.png"],
            videoLink:['https://player.vimeo.com/video/310027671']
        },
        {
            id: 4, 
            title:"Games",
            tools:"Unity, Game Design & Development",
            descriptions:"",
            imgFolder:"Games", 
            imgsScrs:["1.png", "2.png","3.png"],
            videoLink:['https://player.vimeo.com/video/378023986','https://player.vimeo.com/video/370009707']
        }
        
    ];

    let videoShow ;
        if(eachContent[props.contentId] && typeof eachContent[props.contentId].videoLink!='undefined'){
        //    videoShow=  (<iframe src={`${eachContent[props.contentId].videoLink}?autoplay=1&loop=1&title=0&byline=0&portrait=0`} width="640" height="330" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>)
           videoShow=  (
            <>  
            {eachContent[props.contentId].videoLink.map((eachVideo, index)=>{
            return(
            <div key={"video"+index} className={styles.h_iframe}> 
             <iframe src={`${eachVideo}?autoplay=0&loop=1&title=0&byline=0&portrait=0`} frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
             </div>
             )
           })
           }
           </>
         )
        }
    let imgsShow; 
        if (eachContent[props.contentId]){
            imgsShow = (
                <div>
                { eachContent[props.contentId].imgsScrs.map((eachImg,index)=>{
                    return (
                        <img key={"content"+index} src={`/portfolio/assets/projectImgs/${eachContent[props.contentId].imgFolder}/${eachImg}`} />
                    )

                })

                }
                </div>
            )
        }


    return (
        <div className={styles.contentContainer}>
            <div className={styles.imgList}>

                {videoShow}
                {/* <img src={`/portfolio/assets/projectImgs/${eachContent[props.contentId].imgFolder}/1.png`} /> */}  
                {imgsShow}
            
            </div>
            <div className={styles.descriptionBar}>
                <h1>
                    {eachContent[props.contentId].title}
                </h1>
                <p dangerouslySetInnerHTML={{__html: props.content}}> 
                    {/* {props.content}SSS  sdsadd sdsad dsads sdsadsdsddsadsads dsadsadsasdssdsdsadsds  */}
                </p>
                <p>Tools and Skills: <b> {eachContent[props.contentId].tools}</b></p>
            </div>
        </div>

    )
}

export default PortfolioCotent; 