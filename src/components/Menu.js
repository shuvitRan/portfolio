import React, {useEffect} from 'react';
import { render } from '@testing-library/react';
import styles from './Menu.module.css';
import SplitText from "react-pose-text";
import TextFx from './TextFx'

const Menu=(props)=>{
    
 
    return (
        <div className={[styles.menu, "noselect"].join(' ')}> 
        
          <div className={(props.isAbout?styles.homeOff:styles.homeOn)} onClick={props.onClickHome} >
          < div className={styles.recent}>
          <SplitText initialPose="exit" pose="enter" charPoses={TextFx}>
            recent  by
          </SplitText>
          </div>   < span className={styles.myName}> 
          <SplitText initialPose="exit" pose="enter" charPoses={TextFx}>
            dān rǎn
          </SplitText>
          </span> 
        </div>
        
        <div className={(!props.isAbout?styles.aboutOff:styles.aboutOn)} onClick={props.onClickAbout}>
        <SplitText initialPose="exit" pose="enter" charPoses={TextFx}>
            about
            </SplitText>
        </div>
        
        
      </div>

    )

}

export default Menu;