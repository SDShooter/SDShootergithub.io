import { useRef } from 'react'
import { SpotLight } from 'three'
import { useFrame } from '@react-three/fiber'
import { SpotLight as SpotLightImpl, useDepthBuffer } from '@react-three/drei'

interface VolumetricLightProps {
  color?: string;
  basePosition?: [number, number, number];
  radius?: number;
  speed?: number;
  phase?: number;
  intensity?: number;
  angle?: number;
}

export function VolumetricLight({ 
  color = "#fffbef",
  basePosition = [3, 6, 3],
  radius = 3,
  speed = 0.2,
  phase = 0,
  intensity = 15,
  angle = 0.7
}: VolumetricLightProps) {
  const light = useRef<SpotLight>(null!)
  const depthBuffer = useDepthBuffer({ frames: 1 })
  
  useFrame((state) => {
    const time = state.clock.elapsedTime
    if (light.current) {
      light.current.position.x = basePosition[0] + Math.sin(time * speed + phase) * radius
      light.current.position.z = basePosition[2] + Math.cos(time * speed + phase) * radius
      light.current.position.y = basePosition[1] + Math.sin(time * speed * 0.5) * 0.5
    }
  })

  return (
    <SpotLightImpl
      ref={light}
      position={basePosition}
      angle={angle}
      distance={25}
      attenuation={2}
      anglePower={7}
      intensity={intensity}
      volumetric
      opacity={0.8}
      depthBuffer={depthBuffer}
      color={color}
    />
  )
}
