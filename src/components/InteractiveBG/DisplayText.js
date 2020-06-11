import React, { useRef }from 'react';
import Text from './Text';
import { Canvas, useLoader, useFrame } from 'react-three-fiber'

function Jumbo(props) {
    const ref = useRef()
    
    // useFrame(({ clock }) => (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z = Math.sin(clock.getElapsedTime()) * 0.1))
    // useFrame(({ clock }) => (ref.current.rotation.x =ref.current.rotation.z = Math.sin(clock.getElapsedTime()) * 0.9))
    // useFrame(()=>(ref.current.rotation.y=mouse.current[0]*0.002))
    useFrame(()=>(ref.current.rotation.y=props.mouse.current[0]*0.0009))
    useFrame(()=>(ref.current.rotation.x=(props.mouse.current[1]*0.0009)))
    return (
      <group ref={ref} position={[0,0,0]} >
        {/* <Text hAlign="center" position={[0,0,0]}  children="Involve Reflect Create" size={1} /> */}
        <Text hAlign="center" position={[0,0,0]}  children="?" size={1} />
        {/* <Text hAlign="left" position={[0, 0, 0]} children="THREE" />
        <Text hAlign="left" position={[0, -4.2, 0]} children="FIBER" />
        <Text hAlign="left" position={[12, 0, 0]} children="4" size={3} />
        <Text hAlign="left" position={[16.5, -4.2, 0]} children="X" /> */}
      </group>
    )
  }


  export default Jumbo;