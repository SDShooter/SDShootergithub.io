'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import type { Mesh } from 'three';
import dynamic from 'next/dynamic';

function RotatingBox() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotate the box smoothly
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.2;
      
      // Add a gentle floating motion
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <Box 
      ref={meshRef} 
      args={[1, 1, 1]} 
      scale={2}
    >
      <meshStandardMaterial 
        color="#4f46e5"
        roughness={0.3}
        metalness={0.4}
      />
    </Box>
  );
}

// Create a client-side only version of the Scene component
const Scene3DContent = () => {
  return (
    <div className="w-full h-[1000px]">
      <Canvas className="canvas"  
        camera={{ isPerspectiveCamera: true, scale: [1, 1, 1] , position: [1, 1, 1]}}
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        performance={{ 
          min: 0.5,
          max: 1,
          debounce: 200
        }}
      >
        <Suspense fallback={null}>
          {/* Improved lighting setup */}
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.7} />
          <pointLight position={[-10, -10, -10]} intensity={0.2} color="#ff9000" />
          <spotLight
            position={[5, 5, 5]}
            angle={0.3}
            penumbra={1}
            intensity={0.5}
            castShadow
          />
          
          {/* Scene content */}
          <RotatingBox />
          <OrbitControls 
            enableDamping={true}
            minDistance={3}
            maxDistance={10}
            enablePan={false}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

// Export a dynamically loaded version that only renders on client
export default dynamic(() => Promise.resolve(Scene3DContent), {
  ssr: false,
  loading: () => <div className="w-full h-[1000px] bg-gray-800"></div>,
});
