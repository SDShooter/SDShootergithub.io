import { useTexture } from "@react-three/drei";
import { RepeatWrapping, Vector2 } from "three";

export function Floor() {
  const texture = useTexture("/textures/grass.jpg", (texture) => {
    texture.wrapS = texture.wrapT = RepeatWrapping;
    texture.repeat.set(100, 100); // More repetitions for grass
  });

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
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
