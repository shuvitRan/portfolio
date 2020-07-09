import React, {useEffect} from 'react';
import { render } from '@testing-library/react';
import styles from './Menu.module.css';
import SplitText from "react-pose-text";
import TextFx from './TextFx'
import {NavLink} from 'react-router-dom';

const Menu=(props)=>{
    
 
    return (
        <div className={[styles.menu, "noselect"].join(' ')}> 
        
          {/* <div className={(props.isAbout?styles.homeOff:styles.homeOn)} onClick={props.onClickHome} > */}
          
          <NavLink 
                activeClassName={styles.homeOn}
                to={{pathname:'/'}}                 
                exact > 
          < div className={styles.recent}>
        
          <SplitText initialPose="exit" pose="enter" charPoses={TextFx}>
           recent by
          </SplitText>
         
          </div>   < span className={styles.myName}> 
          <SplitText initialPose="exit" pose="enter" charPoses={TextFx}>
            dān rǎn
          </SplitText>
          </span> 
          </NavLink>
        {/* </div> */}
        
        {/* <div className={(!props.isAbout?styles.aboutOff:styles.aboutOn)} onClick={props.onClickAbout}> */}
       
        <NavLink 
                activeClassName={styles.aboutOn}
                to={{pathname:'/About'}}                 
                > 
        < span className={styles.about}> 
        <SplitText initialPose="exit" pose="enter" charPoses={TextFx}>
            about
            </SplitText>
        </span>
        </NavLink>
        {/* </div> */}
        
        
      </div>

    )

}

export default Menu;