import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const LAYERS = [6, 10, 12, 10, 6, 4];
const LAYER_SPACING = 1.8;
const NODE_SPACING = 0.9;
const COLORS = ['#a855f7', '#7c3aed', '#6366f1', '#8b5cf6', '#c084fc', '#a78bfa'];

function Neuron({ position, size, color, phase }) {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime * 0.3 + phase;
    ref.current.position.y = position[1] + Math.sin(t) * 0.05;
    ref.current.scale.setScalar(1 + Math.sin(t * 0.6) * 0.04);
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshPhysicalMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.6}
        roughness={0.1}
        metalness={0.2}
        transparent
        opacity={0.85}
      />
    </mesh>
  );
}

function SynapseLine({ start, end, color }) {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.opacity = 0.06 + Math.sin(state.clock.elapsedTime * 0.3 + start[0] + start[1]) * 0.03;
    }
  });

  return (
    <line>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={2}
          array={new Float32Array([...start, ...end])}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial ref={ref} color={color} transparent opacity={0.08} blending={THREE.AdditiveBlending} />
    </line>
  );
}

function SignalPulse({ start, end, color, speed, offset }) {
  const ref = useRef();
  const dir = useMemo(() => [
    end[0] - start[0],
    end[1] - start[1],
    end[2] - start[2],
  ], [start, end]);

  useFrame((state) => {
    const t = ((state.clock.elapsedTime * speed + offset) % 1);
    ref.current.position.set(
      start[0] + dir[0] * t,
      start[1] + dir[1] * t,
      start[2] + dir[2] * t,
    );
    const fade = Math.sin(t * Math.PI);
    ref.current.scale.setScalar(fade * 1.5);
    if (ref.current.material) ref.current.material.opacity = fade * 0.9;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.05, 6, 6]} />
      <meshBasicMaterial color={color} transparent opacity={0} blending={THREE.AdditiveBlending} />
    </mesh>
  );
}

function NeuronGlow({ position, size, color, phase }) {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime * 0.2 + phase;
    ref.current.rotation.x = t * 0.5;
    ref.current.rotation.z = t * 0.3;
    ref.current.position.y = position[1] + Math.sin(t) * 0.03;
  });

  return (
    <group ref={ref} position={position}>
      <mesh>
        <ringGeometry args={[size * 2.5, size * 2.5 + 0.01, 24]} />
        <meshBasicMaterial color={color} transparent opacity={0.06} side={THREE.DoubleSide} blending={THREE.AdditiveBlending} />
      </mesh>
      <mesh rotation={[Math.PI / 2.5, 0.3, 0]}>
        <ringGeometry args={[size * 2, size * 2 + 0.008, 24]} />
        <meshBasicMaterial color={color} transparent opacity={0.04} side={THREE.DoubleSide} blending={THREE.AdditiveBlending} />
      </mesh>
    </group>
  );
}

function NeuralNetwork({ mouse }) {
  const groupRef = useRef();

  const nodePositions = useMemo(() => {
    const positions = [];
    LAYERS.forEach((count, layerIdx) => {
      const x = (layerIdx - (LAYERS.length - 1) / 2) * LAYER_SPACING;
      for (let i = 0; i < count; i++) {
        const y = (i - (count - 1) / 2) * NODE_SPACING;
        const z = Math.sin(layerIdx * 0.7) * 0.3;
        positions.push({
          pos: [x, y, z],
          layer: layerIdx,
          index: i,
          color: COLORS[layerIdx % COLORS.length],
          size: 0.08 + (count === Math.max(...LAYERS) ? 0.04 : 0) + (count === 4 ? 0.06 : 0),
        });
      }
    });
    return positions;
  }, []);

  const connections = useMemo(() => {
    const conns = [];
    const nodesByLayer = {};
    nodePositions.forEach((n) => {
      if (!nodesByLayer[n.layer]) nodesByLayer[n.layer] = [];
      nodesByLayer[n.layer].push(n);
    });

    for (let l = 0; l < LAYERS.length - 1; l++) {
      const leftNodes = nodesByLayer[l] || [];
      const rightNodes = nodesByLayer[l + 1] || [];
      leftNodes.forEach((ln, li) => {
        const connectCount = Math.min(2, rightNodes.length);
        const startIdx = (li * connectCount) % rightNodes.length;
        for (let c = 0; c < connectCount; c++) {
          const ri = (startIdx + c) % rightNodes.length;
          conns.push({
            start: ln.pos,
            end: rightNodes[ri].pos,
            color: ln.color,
            speed: 0.2 + Math.random() * 0.3,
            offset: Math.random(),
          });
        }
      });
    }
    return conns;
  }, [nodePositions]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = t * 0.04 + mouse.current[0] * 0.08;
    groupRef.current.rotation.x = Math.sin(t * 0.02) * 0.03 + mouse.current[1] * 0.04;
    groupRef.current.position.y = Math.sin(t * 0.03) * 0.08;
  });

  return (
    <group ref={groupRef}>
      {nodePositions.map((n, i) => (
        <group key={`neuron-${i}`}>
          <Neuron position={n.pos} size={n.size} color={n.color} phase={i * 0.5} />
          <NeuronGlow position={n.pos} size={n.size} color={n.color} phase={i * 0.3} />
        </group>
      ))}
      {connections.map((c, i) => (
        <group key={`conn-${i}`}>
          <SynapseLine start={c.start} end={c.end} color={c.color} />
          <SignalPulse start={c.start} end={c.end} color={c.color} speed={c.speed} offset={c.offset} />
        </group>
      ))}
    </group>
  );
}

function Starfield({ count = 2000 }) {
  const ref = useRef();
  const [positions, colors, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    const siz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const r = 8 + Math.random() * 25;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.cos(phi) * (0.6 + Math.random() * 0.4);
      pos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
      const brightness = 0.3 + Math.random() * 0.7;
      cols[i * 3] = brightness * (0.9 + Math.random() * 0.1);
      cols[i * 3 + 1] = brightness * (0.85 + Math.random() * 0.15);
      cols[i * 3 + 2] = brightness;
      siz[i] = 0.02 + Math.random() * 0.06;
    }
    return [pos, cols, siz];
  }, [count]);

  useFrame((state) => {
    const t = state.clock.elapsedTime * 0.01;
    ref.current.rotation.y = t;
    ref.current.rotation.x = Math.sin(t * 0.3) * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={count} array={sizes} itemSize={1} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function AmbientDust({ count = 400 }) {
  const ref = useRef();
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
      const hue = 0.72 + Math.random() * 0.18;
      const c = new THREE.Color().setHSL(hue, 0.5, 0.3 + Math.random() * 0.2);
      cols[i * 3] = c.r;
      cols[i * 3 + 1] = c.g;
      cols[i * 3 + 2] = c.b;
    }
    return [pos, cols];
  }, [count]);

  useFrame((state) => {
    const t = state.clock.elapsedTime * 0.02;
    ref.current.rotation.y = t * 0.1;
    ref.current.rotation.x = Math.sin(t * 0.2) * 0.01;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.4}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function CentralGlow() {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime * 0.2;
    ref.current.intensity = 0.3 + Math.sin(t) * 0.1;
  });

  return (
    <pointLight ref={ref} position={[0, 0, 0]} intensity={0.4} color="#a855f7" distance={15} decay={0.5} />
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
    <div className="absolute inset-0 z-0" onMouseMove={handleMouseMove}>
      <Canvas
        camera={{ position: [0, 0.5, 11], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.2} />
        <CentralGlow />
        <pointLight position={[4, 3, 4]} intensity={0.3} color="#7c3aed" />
        <pointLight position={[-4, -2, 3]} intensity={0.3} color="#6366f1" />
        <NeuralNetwork mouse={mouse} />
        <Starfield count={2000} />
        <AmbientDust count={400} />
      </Canvas>
    </div>
  );
}

export default ThreeScene;
