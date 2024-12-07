'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import type { Mesh } from 'three';
import dynamic from 'next/dynamic';
import { Skybox } from './Skybox';
import { Floor } from './Floor';
import { VolumetricLight } from './VolumetricLight';
import { EffectComposer, Bloom, DepthOfField, Noise, Vignette } from '@react-three/postprocessing';
//import { BlendFunction, Resizer, KernelSize } from 'postprocessing';

function ReflectiveSphere() {
  const meshRef = useRef<Mesh>(null!);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} castShadow position={[0, 2, 0]} scale={1000}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshPhysicalMaterial 
        metalness={0.9}
        roughness={0.1}
        envMapIntensity={2}
        clearcoat={1}
        clearcoatRoughness={0.1}
        color="#ffffff"
      />
    </mesh>
  );
}

// Create a client-side only version of the Scene component
const Scene3DContent = () => {
  return (
    <div style={{ width: '100%', height: '75vh', position: 'relative' }}>
      <Canvas 
        style={{ position: 'absolute' }}
        camera={{ 
          position: [1500, 1500, 1500], 
          far: 100000,
          near: 100,
          fov: 45
        }}
        dpr={[1, 2]}
        shadows
        gl={{ 
          antialias: true,
          alpha: false,
          stencil: false,
          depth: false,
          toneMapping: 3,
        }}
      >
        <color attach="background" args={['#000000']} />
        <fog attach="fog" args={['#000000', 1000, 5000]} />
        
        {/* Global Illumination */}
        <ambientLight intensity={2} />
        <directionalLight
          position={[-5, 8, -5]}
          intensity={3}
          color="#b6ceff"
          castShadow
        />
        <directionalLight
          position={[5, 8, 5]}
          intensity={3}
          color="#ffd4b6"
          castShadow
        />
        <pointLight 
          position={[10, 10, 10]} 
          castShadow
          intensity={4}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        
        <Suspense fallback={null}>
          <Skybox />
          <Floor />
          <ReflectiveSphere />
          {/* Main warm light */}
          <VolumetricLight 
            color="#fffbef"
            basePosition={[0.75, 4, 0.75]}
            radius={0.75}
            speed={0.2}
            intensity={30}
            angle={0.7}
          />
          {/* Cool blue backlight */}
          <VolumetricLight 
            color="#b6e4ff"
            basePosition={[-1, 3.5, -1]}
            radius={0.6}
            speed={0.15}
            phase={Math.PI * 0.5}
            intensity={120}
            angle={0.6}
          />
          {/* Subtle purple accent */}
          <VolumetricLight 
            color="#e2b6ff"
            basePosition={[1, 3, -0.75]}
            radius={0.5}
            speed={0.25}
            phase={Math.PI * 1.2}
            intensity={100}
            angle={0.5}
          />
          <Environment preset="sunset" background={false} />
          <OrbitControls 
            enableZoom={true}
            maxDistance={10000}
            minDistance={300}
            target={[0, 2, 0]}
          />
          <EffectComposer multisampling={0}>
            <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} />
            <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
            <Noise opacity={0.02} />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
};

// Export a dynamically loaded version that only renders on client
export default dynamic(() => Promise.resolve(Scene3DContent), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: '75vh', position: 'relative' }} className="bg-gray-800" />,
});
