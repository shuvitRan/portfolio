import ReactDOM from 'react-dom'
import React, { useRef, useState } from 'react'
import { Canvas,useFrame } from 'react-three-fiber'
import {Box} from './components/Box'
// import Box from './components/Box'
import './App.css';



function PortfolioGrid (props){
// const mesh = useRef();



    return (
        <div className="canvasContainer">
        
            <Canvas>
            <pointLight position={[10, 10, 10]} />
                {/* <mesh>
                <sphereBufferGeometry attach="geometry" />
                <meshStandardMaterial attach="material" color="hotpink" />
                </mesh> */}
                <Box position={[-1.2, 0, 0]} />
                <Box position={[1.2, 0, 0]} />
                    
            </Canvas>

        </div>
);
}


export default PortfolioGrid;