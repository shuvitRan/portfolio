import React from 'react';
import ReactDOM from "react-dom";
import styles from "./EachImage.module.css";

// import React, {Suspense} from 'react-image'
// import {useImage} from 'react-image'

const GridImg = (props)=>{
    
    return (
        <>
        <div className ={styles.cardContainer} onClick={props.onClick} imgid={props.projectId}  >
                <div className={styles.imgContainer} >
                    <img className={styles.eachImage}  src={ props.content.src } alt={props.content.title}/>
               
                    <div className={styles.overlay} >                   
                    </div>
                </div>
                
                {/* <img src={require(`${ props.imgsrc }`)} alt="P1"/> */}
                {/* <img src={require(`${ props.imgsrc }`)} alt="P1"/> */}
               
                <div className={styles.textOverlay} >
                    <h1 className={styles.cardText}>{props.content.title }</h1>
                    <p className={styles.cardCo}>{props.content.partner}</p>
                    <p className={styles.cardCate}>{props.content.category}</p>
                    {/* <p className={styles.cardCo}>Web Application</p> */}
                   
                </div>
                
        </div>
        
        </>
    )
}


export default GridImg; 