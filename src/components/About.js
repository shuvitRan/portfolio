import React,{useEffect} from 'react'
import { DefaultLoadingManager } from 'three'
import styles from './About.module.css';
import ReactGa from 'react-ga';
import SplitText from "react-pose-text";
import TextFx from './TextFx'

const About=()=>{
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <div className={styles.aboutContainer}>
            <div className={styles.textBlock}>
            <span>
                {/* <SplitText initialPose="exit" pose="enter" charPoses={TextFx}>
                    Hellooo! I am &nbsp;
                </SplitText> */}
                </span>
                <h1>
                    <SplitText initialPose="exit" pose="enter" charPoses={TextFx}>
                    Dan Ran
                    </SplitText>
                </h1>       
                <span>
                <SplitText initialPose="exit" pose="enter" charPoses={TextFx}>
                    冉聃
                </SplitText>
                </span>
                <div> <b>
                <SplitText initialPose="exit" pose="enter" charPoses={TextFx}>
                  designer & creative technologist. 
                </SplitText>
                    </b>
                <br/><br/>
                <SplitText initialPose="exit" pose="enter" charPoses={TextFx}>
                M.S. Data Visualization. 
                 Awarded with President’s Scholarship, 
                Parsons School of Design. 
                </SplitText>
                 <br/> 
                 <SplitText initialPose="exit" pose="enter" charPoses={TextFx}>
                 B.F.A. Digital Design & Interactive Technology,
                 graduated with Honor, Pratt Institute.
                 </SplitText>
                 </div>
                 <br/>
                <div className={styles.linkOut}> email: 	&nbsp;
                 <ReactGa.OutboundLink
                                    eventLabel={"Email is Clicked"}
                                    to="mailto:randanfx@gmail.com"
                                    trackerNames={['tracker2']}
                                > randanfx@gmail.com</ReactGa.OutboundLink>
                <br/> vimeo:	&nbsp; 
                <ReactGa.OutboundLink
                                    eventLabel={"vimeo account is oppened"}
                                    to="https://vimeo.com/randan"
                                    target="_blank"
                                    trackerNames={['tracker2']}
                                > vimeo.com/randan</ReactGa.OutboundLink>
                <br/> github:	&nbsp;       
                <ReactGa.OutboundLink
                                    eventLabel={"Github Page is clicked"}
                                    to="https://github.com/shuvitRan"
                                    target="_blank"
                                    trackerNames={['tracker2']}
                                > github.com/shuvitRan</ReactGa.OutboundLink>
                <br/> project archive:	&nbsp; 
                <ReactGa.OutboundLink
                                    eventLabel={"Old Archive is clicked"}
                                    to="http://www.danranpresent.com/"
                                    target="_blank"
                                    trackerNames={['tracker2']}
                                > danranpresent.com</ReactGa.OutboundLink></div>

                {/* <a href="mailto:randanfx@gmail.com">randanfx@gmail.com</a> <a href="https://vimeo.com/randan">vimeo.com/randan</a> <a href="http://www.danranpresent.com/">danranpresent.com</a>*/}
            </div>
            <div className={styles.textBlockReco}>
                <b>
                <SplitText initialPose="exit" pose="enter" charPoses={TextFx}>
                    Exhibition & Recognition
                </SplitText>
                </b>
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