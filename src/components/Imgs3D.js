import ReactDOM from 'react-dom';
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';

export const Imgs3D = (props)=>{
const mesh = useRef()

return ( 
    <mesh>
        {...props}
        ref={mesh}
        <planeBufferGeometry />
        <meshBasicMaterial />
    </mesh>
)

}

