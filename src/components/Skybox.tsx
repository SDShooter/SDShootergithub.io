import { useTexture } from "@react-three/drei";
import { BackSide } from "three";

export function Skybox() {
  const assets = '/assets';
  const [
    front,
    back,
    top,
    bottom,
    right,
    left
  ] = useTexture([
    `${assets}/front.jpg`,
    `${assets}/back.jpg`,
    `${assets}/top.jpg`,
    `${assets}/bottom.jpg`,
    `${assets}/right.jpg`,
    `${assets}/left.jpg`
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
