import React from 'react'
import { DefaultLoadingManager } from 'three'
import styles from './About.module.css';

const About=()=>{
    return(
        <div className={styles.aboutContainer}>
            <div className={styles.textBlock}>
                <h1>冉聃 dan ran</h1>
                <p><b>interaction designer, creative developer & video artist</b> 
                <br/><br/>M.S. Data Visualization. 
                <br/> Awarded with President’s Scholarship 
                <br/>Parsons School of Design.     
                 <br/> B.F.A. Digital Design & Interactive Technology
                 <br/> Graduate with Honor, Pratt Institute.</p>
                <p> Email: <a href="mailto:randanfx@gmail.com">randanfx@gmail.com</a> 
                <br/> Vimeo: <a href="https://vimeo.com/randan">vimeo.com/randan</a>
                <br/> Github: <a href="https://github.com/shuvitRan">github.com/shuvitRan</a>
                <br/> Project Archive: <a href="http://www.danranpresent.com/">danranpresent.com</a></p>
            </div>
            <div className={styles.textBlock}>
                <b>Exhibition&Recognition</b>
                <p>Pratt Digital Arts 2017 Exhibition, Pablo’s Birthday Gallery Manhattan, New York, Group Exhibition, Project: Wuwei, Type: Interactive Projection Art, Apr 30-May 6, 2017</p>
                <p>Politics and Power, Ann Street Gallery, Newburgh, New York, Group Exhibition, Project: Lvl++，Type: Interactive Art Installation, October 8 to Nov 26, 2016</p>
                <p>Grief* in three languages，Dekalb Gallery, Brooklyn， NY，Group Exhibition, Project: Grieving ,Type: Video Art， Curated by Zina Saro-Wiwa, Dec 2016</p>
                <p>SoCal Clips Indie Film Festival Screening, Luna(2016)， New York, NY, Oct 2 2016</p>
                <p>The Sadness of Modernity Pop-up show, Myrtle Gallery, Brooklyn, NY, Group Exhibition, Type: Interactive Art Installation, April 2016</p>
                <p>Animal Patterning Project, SYNCED Under the Viaduct Festival, Project: Orbs, Group Project, Type: Physical Computing, Nov 2015</p>
                <p>Vans China Short Documentary Film Award Official Selection, 姜程 Living Off the Wall (2014)，Sep 2014</p>
            </div>
        </div>
    )
}

export default About;