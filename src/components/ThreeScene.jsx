import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PARTICLE_COUNT = 3000;
const COLORS = ['#a855f7', '#7c3aed', '#6366f1', '#06b6d4', '#c084fc'];

function Particles({ mouse }) {
  const ref = useRef();

  const [positions, colors, sizes] = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const cols = new Float32Array(PARTICLE_COUNT * 3);
    const siz = new Float32Array(PARTICLE_COUNT);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const radius = 3 + Math.random() * 15;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.cos(phi) * (0.5 + Math.random() * 0.5);
      pos[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
      const c = new THREE.Color(COLORS[Math.floor(Math.random() * COLORS.length)]);
      const b = 0.3 + Math.random() * 0.7;
      cols[i * 3] = c.r * b;
      cols[i * 3 + 1] = c.g * b;
      cols[i * 3 + 2] = c.b * b;
      siz[i] = 0.01 + Math.random() * 0.04;
    }
    return [pos, cols, siz];
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * 0.015 + mouse.current[0] * 0.05;
    ref.current.rotation.x = Math.sin(t * 0.01) * 0.02 + mouse.current[1] * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={PARTICLE_COUNT} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={PARTICLE_COUNT} array={colors} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={PARTICLE_COUNT} array={sizes} itemSize={1} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function GlowRings() {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    ref.current.rotation.z = t * 0.05;
    ref.current.rotation.x = Math.sin(t * 0.03) * 0.1;
  });

  return (
    <group ref={ref}>
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} position={[0, 0, 0]} rotation={[Math.PI / 3 + i * 0.5, i * 0.3, 0]}>
          <ringGeometry args={[2 + i * 0.8, 2.01 + i * 0.8, 64]} />
          <meshBasicMaterial
            color={COLORS[i % COLORS.length]}
            transparent
            opacity={0.04 + i * 0.01}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}

function CentralGlow() {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime * 0.3;
    ref.current.intensity = 0.4 + Math.sin(t) * 0.15;
  });

  return (
    <pointLight ref={ref} position={[0, 0, 0]} intensity={0.5} color="#a855f7" distance={12} decay={0.4} />
  );
}

function ThreeScene() {
  const mouse = useRef([0, 0]);

  const handleMouseMove = (e) => {
    mouse.current = [
      (e.clientX / window.innerWidth) * 2 - 1,
      -(e.clientY / window.innerHeight) * 2 + 1,
    ];
  };

  return (
    <div className="fixed inset-0 z-0" onMouseMove={handleMouseMove}>
      <Canvas
        camera={{ position: [0, 0.5, 10], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.2} />
        <CentralGlow />
        <pointLight position={[5, 3, 5]} intensity={0.3} color="#7c3aed" />
        <pointLight position={[-5, -2, 4]} intensity={0.2} color="#6366f1" />
        <Particles mouse={mouse} />
        <GlowRings />
      </Canvas>
    </div>
  );
}

export default ThreeScene;
