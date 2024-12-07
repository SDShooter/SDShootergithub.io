import * as THREE from 'three'
import { useTexture } from "@react-three/drei";
import { RepeatWrapping, Vector2 } from "three";
import { useFrame, ThreeElements } from '@react-three/fiber'
import { useRef } from 'react';


export function Floor(props: ThreeElements['mesh']) {
  const mesh = useRef<THREE.Mesh>(null!)
  const texture = useTexture("/textures/grass.jpg", (texture) => {
    texture.wrapS = texture.wrapT = RepeatWrapping;
    texture.repeat.set(100, 100); // More repetitions for grass
  });
  
  useFrame((state, delta) => (mesh.current.rotation.x += delta))

  return (
    <mesh
    {...props}
     rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial 
        map={texture}
        roughness={1}
        metalness={0}
        normalScale={new Vector2(0.3, 0.3)}
      />
    </mesh>
  );
}
