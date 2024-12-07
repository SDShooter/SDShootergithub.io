import { useTexture } from "@react-three/drei";
import { BackSide } from "three";

export function Skybox() {
  const assets = '/docs/assets';
  const [
    front,
    back,
    top,
    bottom,
    right,
    left
  ] = useTexture([
    `${assets}/textures/skybox/front.jpg`,
    `${assets}/textures/skybox/back.jpg`,
    `${assets}/textures/skybox/top.jpg`,
    `${assets}/textures/skybox/bottom.jpg`,
    `${assets}/textures/skybox/right.jpg`,
    `${assets}/textures/skybox/left.jpg`
  ]);

  return (
    <mesh scale={[1, 1, 1]}>
      <boxGeometry args={[5000, 5000, 5000]} />
      <meshBasicMaterial attach="material-0" map={front} side={BackSide} />
      <meshBasicMaterial attach="material-1" map={back} side={BackSide} />
      <meshBasicMaterial attach="material-2" map={top} side={BackSide} />
      <meshBasicMaterial attach="material-3" map={bottom} side={BackSide} />
      <meshBasicMaterial attach="material-4" map={right} side={BackSide} />
      <meshBasicMaterial attach="material-5" map={left} side={BackSide} />
    </mesh>
  );
}
