import { useRef, useEffect } from 'react';

import birdScene from '../assets/3d/bird.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

/**
 * Bird component using React Three Fiber and Drei for 3D animations.
 * 
 * This component renders a 3D bird model, animates it, and manages its interactions within a 3D scene.
 * It uses 'useGLTF' to load the bird model, 'useAnimations' for the animations, and 'useFrame' to update 
 * its position and rotation on each frame render. The bird's position and rotation are dynamically updated
 * based on the elapsed time and camera's position.
 * 
 * @returns {JSX.Element} A JSX element representing the 3D animated bird.
 */
const Bird = () => {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useFrame(({ clock, camera }) => {
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    if (birdRef.current.position.x > camera.position.x + 10) {
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      birdRef.current.rotation.y = 0;
    }

    if (birdRef.current.rotation.y === 0) {
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  });

  useEffect(() => {
    actions['Take 001'].play();
  }, [actions]);

  return (
    <mesh 
      position={[-5, 2, 1]} 
      scale={[0.003, 0.003, 0.003]}
      ref={birdRef}
    >
      <primitive object={scene} />
    </mesh>
  );
}

export default Bird;
