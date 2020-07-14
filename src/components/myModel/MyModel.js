
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
        scale={active ? [1, 1, 1] : [1, 1, 1]}
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}>
       <meshLambertMaterial attach="material" color="rgb(35, 35, 35)"  transparent= "true" opacity="0.5" />
        <Model attach="geometry" color="rgb(35, 35, 35)"  url={"assets/3dModel/Thinker.obj"} />
        
        {/* <meshBasicMaterial attach="material" color={hovered ? 'orange' : 'orange'} /> */}
   
     </mesh>
    )
 }   

 export default MyModel;