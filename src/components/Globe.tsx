import * as React from 'react';
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import type { Mesh, Group } from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<Mesh>(null!);
  const ringRef = useRef<Mesh>(null!);
  const ring2Ref = useRef<Mesh>(null!);
  const groupRef = useRef<Group>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.25;
      meshRef.current.rotation.x += delta * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.4;
      ringRef.current.rotation.x += delta * 0.15;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= delta * 0.3;
      ring2Ref.current.rotation.y += delta * 0.2;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Distorted Glowing Sphere */}
      <Sphere visible args={[1, 100, 200]} scale={1.8} ref={meshRef}>
        <MeshDistortMaterial
          color="#8B5CF6"
          attach="material"
          distort={0.45}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>

      {/* Primary Orbital Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[2.5, 0.025, 16, 100]} />
        <meshStandardMaterial color="#38bdf8" emissive="#0284c7" emissiveIntensity={0.6} />
      </mesh>

      {/* Secondary Counter-Rotating Ring */}
      <mesh ref={ring2Ref} rotation={[-Math.PI / 4, 0, Math.PI / 4]}>
        <torusGeometry args={[2.8, 0.018, 16, 100]} />
        <meshStandardMaterial color="#c084fc" emissive="#9333ea" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
};

const Globe: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5.5], fov: 50 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[-3, 4, 3]} intensity={1.5} color="#c084fc" />
      <directionalLight position={[3, -3, -2]} intensity={1.2} color="#38bdf8" />
      <pointLight position={[0, 0, 4]} intensity={0.8} color="#ffffff" />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
      <AnimatedSphere />
    </Canvas>
  );
};

export default Globe;
