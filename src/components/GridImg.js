import React from 'react';
import ReactDOM from "react-dom";
import styles from "./GridImg.module.css";
import SplitText from "react-pose-text";
import TextFx from './TextFx';
// import React, {Suspense} from 'react-image'
// import {useImage} from 'react-image'

import { NavLink, Switch} from 'react-router-dom';
const GridImg = (props)=>{
    
    return (
        <>
        <div className ={styles.cardContainer} onClick={props.onClick} imgid={props.projectId}  >

                <NavLink to={{pathname:'/'+props.projectId+"/"+props.content.title.replace(/\s/g, '')}} >
                <div className={styles.imgContainer} >
                    <img className={styles.eachImage}  src={"/assets/GridImg/"+props.content.src } alt={props.content.title}/>
               
                    <div className={styles.overlay} >                   
                    </div>
                </div>

               
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
                </NavLink>  
        </div>
        
        </>
    )
}


export default GridImg; 