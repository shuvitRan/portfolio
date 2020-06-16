import React,{useEffect} from 'react'
import { DefaultLoadingManager } from 'three'
import styles from './About.module.css';

const About=()=>{
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <div className={styles.aboutContainer}>
            <div className={styles.textBlock}>
                <h1>Dan Ran</h1>       
                <span>冉聃</span>
                <p> <b>Interaction Designer & Developer</b>
                <br/><br/>M.S. Data Visualization. 
                 Awarded with President’s Scholarship, 
                Parsons School of Design. 
                    
                 <br/> B.F.A. Digital Design & Interactive Technology,
                 graduated with Honor, Pratt Institute.</p>
                <p className={styles.linkOut}> email: <a href="mailto:randanfx@gmail.com">randanfx@gmail.com</a> 
                <br/> vimeo: <a href="https://vimeo.com/randan">vimeo.com/randan</a>
                <br/> github: <a href="https://github.com/shuvitRan">github.com/shuvitRan</a>
                <br/> project archive: <a href="http://www.danranpresent.com/">danranpresent.com</a></p>
            </div>
            <div className={styles.textBlockReco}>
                <b>Exhibition & Recognition</b>
                <p>Enter Playmode, Wonderville, Brooklyn, New York, Game Showcase, Project: Blue Desert Disco, Type: Digital Game, December 2019</p>
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