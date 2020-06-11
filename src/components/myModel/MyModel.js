
import React,{ useMemo, useState, useRef } from 'react'
import { render } from 'react-dom'
import { Canvas, useFrame } from 'react-three-fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'






function Model({ url }) {
    const [obj, set] = useState()
    useMemo(() => new OBJLoader().load(url, set), [url])
    // set.scale.set(0.5,0.5,0.5)

    return obj ? <primitive object={obj} /> : null 
}





 const MyModel=(props)=>{

    const mesh = useRef()

    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.001))
    return(

        <mesh
        {...props}
        ref={mesh}
        scale={active ? [1.5, 1.5, 1.5] : [0.5, 0.5, 0.5]}
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}>
       
        <Model attach="geometry" color='hotpink' url={"/portfolio/assets/3dModel/JoyStick.obj"} />
         <meshBasicMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
   
    </mesh>
    )
 }   

 export default MyModel;