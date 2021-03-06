import * as THREE from 'three'
import React, { useMemo } from 'react'
import { useLoader, useUpdate } from 'react-three-fiber'

export default function({ children, vAlign = 'center', hAlign = 'center', size = 1, color = '#000000', ...props }) {
  const font = useLoader(THREE.FontLoader, '/assets/jsFont/Helvetica.json')
  const config = useMemo(
    () => ({ font, size: 40, height: 10, curveSegments: 32, bevelEnabled: true, bevelThickness: 1, bevelSize: 2.5, bevelOffset: 0, bevelSegments: 8 }),
    [font]
  )
  const mesh = useUpdate(
    self => {
      const size = new THREE.Vector3()
      self.geometry.computeBoundingBox()
      self.geometry.boundingBox.getSize(size)
      self.position.x = hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x
      self.position.y = vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y
    },
    [children]
  )
  return (
    <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
      <mesh ref={mesh}  >
        <textGeometry attach="geometry" args={[children, config]} />
        {/* <meshBasicMaterial flatShading={true} attach="material" color={"#ff0061"} /> */}
        <meshPhongMaterial attach="material" color="rgb(140, 140, 145)"  transparent= "true" opacity="0.9"/>
      </mesh>
    </group>
  )
}
