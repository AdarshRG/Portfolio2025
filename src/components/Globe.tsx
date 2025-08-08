import * as React from 'react';
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const AnimatedSphere = () => {
  const ref = useRef<any>();
  useFrame(() => (ref.current.rotation.y += 0.001));
  return (
    <Sphere visible args={[1, 100, 200]} scale={2} ref={ref}>
      <MeshDistortMaterial
        color="#86a8e7"
        attach="material"
        distort={0.5}
        speed={1.5}
        roughness={0.5}
      />
    </Sphere>
  );
};

const Globe: React.FC = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <OrbitControls enableZoom={false} autoRotate />
      <AnimatedSphere />
    </Canvas>
  );
};

export default Globe;
