import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import scene from '../assets/3d/fox.glb'

/**
 * Fox component for rendering a 3D model of a fox using React Three Fiber and Drei.
 * 
 * This component loads and displays a 3D fox model, with support for animations.
 * It uses 'useGLTF' to load the model and 'useAnimations' to handle animations.
 * The component accepts a 'currentAnimation' prop to control which animation to play.
 * 
 * @param {Object} props - Component props including 'currentAnimation' and other props for the 3D group.
 * @returns {JSX.Element} A JSX element representing the 3D fox model.
 */
const Fox = ({ currentAnimation, ...props }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    Object.values(actions).forEach((action) => action.stop());

    if (actions[currentAnimation]) {
        actions[currentAnimation].play();
    }

  }, [actions, currentAnimation])
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        {/* SkinnedMesh components for various parts of the fox */}
        {['Object_7', 'Object_8', 'Object_9', 'Object_10', 'Object_11'].map((objectName) => (
          <skinnedMesh
            key={objectName}
            name={objectName}
            geometry={nodes[objectName].geometry}
            material={materials.PaletteMaterial001}
            skeleton={nodes[objectName].skeleton}
          />
        ))}
      </group>
    </group>
  );
}

export default Fox;
