import ReactDOM from 'react-dom'
import React from 'react'
import { Canvas } from 'react-three-fiber'
import {Box} from './Box';
import MyModel from './myModel/MyModel'

// import Box from './components/Box'
import '../App.scss';



function PortfolioBG (props){
// const mesh = useRef();



    return (
        <div className="canvasContainer">
        
            <Canvas>
            <pointLight position={[10, 10, 10]} />
                {/* <mesh>
                <sphereBufferGeometry attach="geometry" />
                <meshStandardMaterial attach="material" color="hotpink" />
                </mesh> */}
                
                <Box position={[1.2, 0, 0]} />
                <MyModel position={[0, 0, 0]}  />
                    
            </Canvas>

        </div>
);
}


export default PortfolioBG;