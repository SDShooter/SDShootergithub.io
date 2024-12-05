'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';
import { useRef } from 'react';
import type { Mesh } from 'three';
import dynamic from 'next/dynamic';

function RotatingBox() {
  const meshRef = useRef<Mesh>(null);

  return (
    <Box ref={meshRef} args={[1, 1, 1]} scale={1.5}>
      <meshStandardMaterial color="#4f46e5" />
    </Box>
  );
}

// Create a client-side only version of the Scene component
const Scene3DContent = () => {
  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [3, 3, 3] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <RotatingBox />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

// Export a dynamically loaded version that only renders on client
export default dynamic(() => Promise.resolve(Scene3DContent), {
  ssr: false,
});
