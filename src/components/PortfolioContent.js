import React from 'react';
import styles from './PortfolioContent.module.css';






const PortfolioCotent = (props)=>{
    return (
        <div className={styles.contentContainer}>
            <div className={styles.imgList}>
                hello this is a img list 
            </div>
            <div className={styles.descriptionBar}>
    <h1>{props.title}</h1>
    <p> {props.content}SSS  sdsadd sdsad dsads sdsadsdsddsadsads dsadsadsasdssdsdsadsds </p>
            </div>
        </div>

    )
}

export default PortfolioCotent; 