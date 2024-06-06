import React, { useRef, useEffect } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const GymScene: React.FC = () => {
    const gymModelPath = '/gym-model.gltf';
    const personModelPath = '/person-model.gltf';

    // Load the gym model
    const gymModel = useLoader(GLTFLoader, gymModelPath);
    // Load the person model
    const personModel = useLoader(GLTFLoader, personModelPath);

    const personRef = useRef<THREE.Group>(null);

    useFrame(() => {
        if (personRef.current) {
            personRef.current.rotation.y += 0.01;
        }
    });

    useEffect(() => {
        console.log('Gym model:', gymModel);
        console.log('Person model:', personModel);
    }, [gymModel, personModel]);

    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            {/* Render the gym model */}
            {gymModel && <primitive object={gymModel.scene} position={[0, 0, 0]} />}
            {/* Render the person model and add animation */}
            {personModel && <primitive object={personModel.scene} ref={personRef} position={[0, 0, 0]} />}
            <OrbitControls />
        </>
    );
};

export default GymScene;
