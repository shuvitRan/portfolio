import React, {useEffect} from 'react';
import { render } from '@testing-library/react';
import styles from './Menu.module.css'


const Menu=(props)=>{
    
 
    return (
        <div className={[styles.menu, "noselect"].join(' ')}> 
        
          <div className={(props.isAbout?styles.homeOff:styles.homeOn)} onClick={props.onClickHome} >
                recent by< div className={styles.myName}> dan ran</div> 
        </div>
        
        <div className={(!props.isAbout?styles.aboutOff:styles.aboutOn)} onClick={props.onClickAbout}>
            about
        </div>
        
      </div>

    )

}

export default Menu;