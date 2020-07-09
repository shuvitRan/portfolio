import React,{useEffect, useRef} from 'react';
import ReactDOM from "react-dom";
import styles from "./GridImg.module.css";
import SplitText from "react-pose-text";
import TextFx from './TextFx';
// import React, {Suspense} from 'react-image'
// import {useImage} from 'react-image'

import { NavLink, Switch} from 'react-router-dom';
import { useSpring, animated } from 'react-spring'

const GridImg = (props)=>{



// const calc = (x, y) => [-(y - element.clientHeight / 2) / 30, (x - element.clientHeight / 2) / 30, 0.9]
// const trans = (x, y, s) => `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s}) `;
const trans = (x, y, s) => `perspective(1000px) scale(${s}) `;
const trans2 = (x, y, s) => `perspective(700px) rotateX(${x}deg) rotateY(${y}deg) scale(${s}) `;
const [animationCard, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

const cardref = useRef();

// let cardX,cardY;
// useEffect(() => {
//     document.onreadystatechange = () => {
//        cardX=cardref.current.clientHeight;
//        cardY= cardref.current.clientWidth;
//       console.log(cardref.current.clientHeight);
//       console.log(cardref.current.clientWidth);
//     };
//   }, []);

  const calc = (x, y) => [-(y - window.innerHeight / 2) / 30, (x - window.innerWidth / 2) / 30, 0.9]



    return (
        <>
     
        <div  className ={styles.cardContainer}  >
        <animated.div 
                    onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                    style={{ transform: animationCard.xys.interpolate(trans) }}>
                <NavLink to={{pathname:'/'+props.projectId+"/"+props.content.title.replace(/\s/g, '')}} >
           
                
                <div className={styles.imgContainer} >
                    <img className={styles.eachImage}  src={"/assets/GridImg/"+props.content.src } alt={props.content.title}/>
               
                    <div className={styles.overlay} >                   
                    </div>
                </div>
               
               
                <div className={styles.textOverlay} >
                <animated.div 
                    onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                    style={{ transform: animationCard.xys.interpolate(trans2) }}>
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
                    </animated.div>
                </div>
               
               
                </NavLink>  
                </animated.div>
        </div>
       
        </>
    )
}


export default GridImg; 