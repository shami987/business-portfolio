import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = ({ position, color, speed }: { position: [number, number, number], color: string, speed: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed;
      meshRef.current.rotation.y += speed * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 32, 32]} position={position}>
      <MeshDistortMaterial color={color} attach="material" distort={0.4} speed={2} roughness={0.2} />
    </Sphere>
  );
};

const Particles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 500;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20;
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#6366f1" transparent opacity={0.6} />
    </points>
  );
};

export const Hero3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }} style={{ position: 'absolute', top: 0, left: 0 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <FloatingShape position={[-3, 0, 0]} color="#6366f1" speed={0.01} />
      <FloatingShape position={[3, 1, -2]} color="#8b5cf6" speed={0.015} />
      <FloatingShape position={[0, -2, -1]} color="#4f46e5" speed={0.012} />
      <Particles />
    </Canvas>
  );
};
