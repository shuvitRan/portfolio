import React from 'react';
import ReactDOM from "react-dom";
import styles from "./GridImg.module.css";
import SplitText from "react-pose-text";
import TextFx from './TextFx';
// import React, {Suspense} from 'react-image'
// import {useImage} from 'react-image'

const GridImg = (props)=>{
    
    return (
        <>
        <div className ={styles.cardContainer} onClick={props.onClick} imgid={props.projectId}  >
                <div className={styles.imgContainer} >
                    <img className={styles.eachImage}  src={"/assets/GridImg/"+props.content.src } alt={props.content.title}/>
               
                    <div className={styles.overlay} >                   
                    </div>
                </div>
                
                {/* <img src={require(`${ props.imgsrc }`)} alt="P1"/> */}
                {/* <img src={require(`${ props.imgsrc }`)} alt="P1"/> */}
               
                <div className={styles.textOverlay} >
                    <h1 className={styles.cardText}> 
                    <SplitText initialPose="exit" pose="enter" charPoses={TextFx}>
                        {props.content.title }
                    </SplitText>    
                    </h1>
                    <div className={styles.cardCo}>
                    <SplitText initialPose="exit" pose="enter" charPoses={TextFx}>
                        {props.content.partner}
                    </SplitText>
                    </div>
                    <div className={styles.cardCate}>
                    <SplitText initialPose="exit" pose="enter" charPoses={TextFx}>
                        {props.content.category}
                        </SplitText>
                    </div>
                    {/* <p className={styles.cardCo}>Web Application</p> */}
                   
                </div>
                
        </div>
        
        </>
    )
}


export default GridImg; 