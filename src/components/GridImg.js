import React from 'react';
import ReactDOM from "react-dom";

// import React, {Suspense} from 'react-image'
// import {useImage} from 'react-image'

const GridImg = (props)=>{
    
    return (
        
        <div className = "eachImage ">
                <img imgid={props.projectId} onClick={props.onClick} src={ props.imgsrc } alt={props.title}/>
                {/* <img src={require(`${ props.imgsrc }`)} alt="P1"/> */}
                {/* <img src={require(`${ props.imgsrc }`)} alt="P1"/> */}
                <h1 className="noselect">{props.title }</h1>
        </div>
        
    )
}


export default GridImg; 