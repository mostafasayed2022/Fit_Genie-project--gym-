import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';

function GymScene() {
  const gymModel = useLoader(GLTFLoader, process.env.PUBLIC_URL + '/gym-model.gltf');
  const personModel = useLoader(GLTFLoader, process.env.PUBLIC_URL + '/person-model.gltf');

  const person = useRef();

  useFrame(() => {
    person.current.rotation.y += 0.01;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <primitive object={gymModel.scene} position={[0, 0, 0]} />
      <primitive object={personModel.scene} ref={person} position={[0, 0, 0]} />
      <OrbitControls />
    </>
  );
}

export default GymScene;
