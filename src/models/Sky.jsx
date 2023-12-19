import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

import skyScene from '../assets/3d/sky.glb';

/**
 * Sky component for rendering a 3D sky scene.
 * 
 * This component uses the 'useGLTF' hook from '@react-three/drei' to load a 3D model (sky.glb).
 * The 'useFrame' hook from '@react-three/fiber' is used to animate the sky scene, making it rotate.
 * The rotation speed is controlled by the 'delta' parameter of 'useFrame', and the 'isRotating' prop 
 * can be used to enable or disable this rotation.
 * 
 * @param {Object} props - Component props.
 * @param {boolean} isRotating - Whether the sky should rotate.
 * @returns {JSX.Element} A JSX element representing the 3D sky scene.
 */
const Sky = () => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef();

  useFrame((_, delta) => {
      skyRef.current.rotation.y += 0.07 * delta;
  })

  return (
    <mesh ref={skyRef}>
        <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky;