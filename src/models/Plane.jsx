import { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei';
import planeScene from '../assets/3d/plane.glb';

/**
 * Plane component for rendering a 3D model of a plane using React Three Fiber and Drei.
 * 
 * This component loads and displays a 3D plane model, with support for animations.
 * It uses 'useGLTF' to load the model and 'useAnimations' to handle animations.
 * The component accepts a 'isRotating' prop to control the animation state.
 * 
 * @param {Object} props - Component props including 'isRotating' and other props for the mesh.
 * @returns {JSX.Element} A JSX element representing the 3D plane model.
 */
const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    // Play the specified animation when the component mounts or when 'isRotating' changes.
    actions['Take 001'].play();
  }, [actions, isRotating])
  
  return (
    <mesh {...props} ref={ref}>
        {/* The primitive component is used to add the GLTF scene to the mesh */}
        <primitive object={scene} />
    </mesh>
  )
}

export default Plane;
