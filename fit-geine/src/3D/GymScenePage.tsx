import React from 'react';
import { Canvas } from '@react-three/fiber';
import GymScene from '../3D/GymScene';

const GymScenePage: React.FC = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Canvas>
        <GymScene />
      </Canvas>
    </div>
  );
};

export default GymScenePage;
