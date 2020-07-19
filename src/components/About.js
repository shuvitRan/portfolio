import React,{useEffect} from 'react'
import { DefaultLoadingManager } from 'three'
import styles from './About.module.scss';
import ReactGa from 'react-ga';
import SplitText from "react-pose-text";
import TextFx from './TextFx';
import TextFx2 from './TextFx2';
import LazyLoad from 'react-lazyload';

const About=()=>{
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <div className={styles.aboutContainer}>
            {/* <div className={styles.decoContainer}>
            <div className={styles.decoTextTop}>关于</div>
            </div> */}
            
            <div className={styles.aboutContentContainer}>
            <div className={styles.textBlock}>
                <h1>
                    <SplitText initialPose="exit" pose="enter" charPoses={TextFx}>
                    My name is Dan Ran, multidisciplinary designer & developer.
                    </SplitText>
                  
                </h1>       
            </div>
                <div className={styles.textBlockC2}> 
                   
                    
                    <br/>
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

                        
                        <br/>
                        <br/>
                    <div className={styles.linkOut}>  <SplitText initialPose="exit" pose="enter" charPoses={TextFx}> email: 	&nbsp;</SplitText>
                        <ReactGa.OutboundLink
                                        eventLabel={"Email is Clicked"}
                                        to="mailto:randanfx@gmail.com"
                                        trackerNames={['tracker2']}
                                    > <SplitText initialPose="exit" pose="enter" charPoses={TextFx}>
                                        randanfx@gmail.com
                                        </SplitText>
                                        </ReactGa.OutboundLink>
                    <br/>  <SplitText initialPose="exit" pose="enter" charPoses={TextFx}> vimeo:	&nbsp; </SplitText>
                    <ReactGa.OutboundLink
                                        eventLabel={"vimeo account is oppened"}
                                        to="https://vimeo.com/randan"
                                        target="_blank"
                                        trackerNames={['tracker2']}
                                    >
                                        <SplitText initialPose="exit" pose="enter" charPoses={TextFx}> 
                                        vimeo.com/randan
                                        </SplitText>
                                        </ReactGa.OutboundLink>
                    <br/>  <SplitText initialPose="exit" pose="enter" charPoses={TextFx}> github:	&nbsp;  </SplitText>     
                    <ReactGa.OutboundLink
                                        eventLabel={"Github Page is clicked"}
                                        to="https://github.com/shuvitRan"
                                        target="_blank"
                                        trackerNames={['tracker2']}
                                    > 
                                     <SplitText initialPose="exit" pose="enter" charPoses={TextFx}> 
                                    github.com/shuvitRan
                                    </SplitText>
                                    </ReactGa.OutboundLink>
                    <br/> <SplitText initialPose="exit" pose="enter" charPoses={TextFx}>  project archive:	&nbsp; </SplitText>
                    <ReactGa.OutboundLink
                                        eventLabel={"Old Archive is clicked"}
                                        to="http://www.danranpresent.com/"
                                        target="_blank"
                                        trackerNames={['tracker2']}
                                    > 
                                     <SplitText initialPose="exit" pose="enter" charPoses={TextFx}> 
                                     danranpresent.com
                                     </SplitText>
                                     </ReactGa.OutboundLink></div>
            </div>
                {/* <a href="mailto:randanfx@gmail.com">randanfx@gmail.com</a> <a href="https://vimeo.com/randan">vimeo.com/randan</a> <a href="http://www.danranpresent.com/">danranpresent.com</a>*/}
                <div className={styles.decoContainer}>
            <div className={styles.ChineseText}>
            <LazyLoad height={300}> 
            <SplitText initialPose="exit" pose="enter" charPoses={TextFx}>
                大家好，我叫冉聃，是一个多学科设计师和创意开发者。现居住在纽约，当然不管在哪，如果有好玩的项目都可以联系我，还请多多关照。
            </SplitText>
            </LazyLoad>
            </div>
            </div>
            <div className={styles.textBlockReco}>
            <LazyLoad height={300}> 
                <SplitText initialPose="exit" pose="enter" charPoses={TextFx}>
                    Exhibition & Recognition
                </SplitText>
            </LazyLoad>
            </div>
           
            <div className={styles.textBlockC2}> 
                <LazyLoad height={400}> 
                <p>
                    
                    Enter Playmode, Wonderville, Brooklyn, New York, Game Showcase, Project: Blue Desert Disco, Type: Digital Game, December 2019
                </p>
                
                <p>
                        Pratt Digital Arts 2017 Exhibition, Pablo’s Birthday Gallery Manhattan, New York, Group Exhibition, Project: Wuwei, Type: Interactive Projection Art, Apr 30-May 6, 2017 
                </p>
                <p>Politics and Power, Ann Street Gallery, Newburgh, New York, Group Exhibition, Project: Lvl++，Type: Interactive Art Installation, October 8 to Nov 26, 2016</p>
                <p>Grief* in three languages，Dekalb Gallery, Brooklyn, NY, Group Exhibition, Project: Grieving, Type: Video Art, Curated by Zina Saro-Wiwa, Dec 2016</p>
                <p>SoCal Clips Indie Film Festival Screening, Luna(2016)， New York, NY, Oct 2 2016</p>
                <p>The Sadness of Modernity Pop-up show, Myrtle Gallery, Brooklyn, NY, Group Exhibition, Type: Interactive Art Installation, April 2016</p>
                <p>Animal Patterning Project, SYNCED Under the Viaduct Festival, Project: Orbs, Group Project, Type: Physical Computing, Nov 2015</p>
                <p>Vans China Short Documentary Film Award Official Selection, 姜程 Living Off the Wall (2014)，Sep 2014</p>
                </LazyLoad>
            </div>   
           
            </div>


            

        </div>
    )
}

export default About;