import * as THREE from 'three';
import ReactDOM from 'react-dom';
import React, { Suspense, useCallback, useRef, useMemo } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import Effects from './Effects';
import DisplayText from './DisplayText';
// import './styles.css'

// import MyModel from '../myModel/MyModel';



function Swarm({ type ,count, mouse }) {
  const mesh = useRef()
  const dummy = useMemo(() => new THREE.Object3D(), [])

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 50
      const factor = 20 + Math.random() * 100
      const speed = 0.001 + Math.random() / 100
      const xFactor = -10 + Math.random() * 60
      const yFactor = -10 + Math.random() * 60
      const zFactor = -100 + Math.random() * 60
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
    }
    return temp
  }, [count])

  useFrame(state => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle
      t = particle.t += speed / 2
      const a = Math.cos(t) + Math.sin(t * 1) / 10
      const b = Math.sin(t) + Math.cos(t * 2) / 10
      const s = Math.max(1.5, Math.cos(t) * 2)
      particle.mx += (mouse.current[0] - particle.mx) * 0.04
      particle.my += (-mouse.current[1] - particle.my) * 0.04
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      )
      dummy.scale.set(s, s, s)
      dummy.updateMatrix()
      mesh.current.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })


  let display;
    if (type=="lineh"){
        display =  (
             <instancedMesh ref={mesh} args={[null, null, count]}>
            <boxBufferGeometry attach="geometry" args={[0.2, 0.2, 0.1]} />
            
            <meshPhongMaterial attach="material" color="rgb(245, 245, 245)" />
          </instancedMesh>
        )
    } else if(type=="snowBall"){
     display= (  
        <instancedMesh ref={mesh} args={[null, null, count]}>
          <sphereBufferGeometry attach="geometry" args={[20, 32, 32]} />
          
          <meshLambertMaterial attach="material" color="rgb(35, 35, 35)"  transparent= "true" opacity="0.5" />
          {/* <meshNormalMaterial attach="material" color="rgb(35, 35, 35)"  transparent= "true" opacity="0.1" /> */}
        </instancedMesh>
      )
    } else if(type=="linev"){
        display= (  
            <instancedMesh ref={mesh} args={[null, null, count]}>
               <boxBufferGeometry attach="geometry" args={[10, 15, 20]} />          
                <meshPhongMaterial attach="material" color="rgb(245, 245, 245)"transparent= "true" opacity="0.4" />
            </instancedMesh>
        )
    }
   

  return (
    <>
        {display}
      {/* <instancedMesh ref={mesh} args={[null, null, count]}>
        <sphereBufferGeometry attach="geometry" args={[1, 32, 32]} />
        <meshPhongMaterial attach="material" color="rgb(245, 245, 245)" />
      </instancedMesh> */}
     
     
    </>
  )
}

const SwarmGroup=(props)=> {
    let displayWord;
    // console.log(props.isAbout)
    if(props.isAbout){
        // displayWord=(<DisplayText mouse={props.mouse} />) ;
    } else if(!props.isAbout) {
        // displayWord= null ;
    }
  
  return (
    // <div style={{ width: '100%', height: '100%' }} >
      <div  className="canvasContainer"  >
        
      <Canvas 
        gl={{ alpha: true, antialias: false, logarithmicDepthBuffer: true }}
        camera={{ fov: 50, position: [0, 0, 30] }}
        onCreated={({ gl }) => {
          // gl.setClearColor('rgb(235, 235, 235)')
          gl.toneMapping = THREE.ACESFilmicToneMapping
          gl.outputEncoding = THREE.sRGBEncoding
        }}>
        <ambientLight intensity={0.1} />
        {/* <pointLight position={[100, 100, 100]} intensity={0.1} /> */}
        <pointLight position={[-100, -100, -100]} intensity={0.8} color="rgb(30, 30, 30)" />
        <pointLight position={[100, 100, 100]} intensity={0.3} color="rgb(65, 15, 10)" />
        <pointLight position={[-100, 100, 100]} intensity={0.5} color="rgb(50, 54, 100)" />
        {/* <Swarm type='lineh' mouse={props.mouse} count={120} /> */}
        {/* <Swarm type='linev' mouse={props.mouse} count={3} /> */}
        <Swarm type='snowBall' mouse={props.mouse} count={6} />
        
        <Suspense fallback={null}>
        {/* <Effects /> */}
     
        {/* <DisplayText mouse={props.mouse} /> */}
       
        </Suspense>
        {/* <MyModel /> */}
  
  
      </Canvas>
      
    </div>
  )
}

export default SwarmGroup;
