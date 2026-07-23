import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Icosahedron } from '@react-three/drei';
import { useTheme } from '../../context/ThemeContext';

const LiquidShape = () => {
    const ref = useRef();
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        ref.current.rotation.x = t * 0.2;
        ref.current.rotation.y = t * 0.3;
        const mouseX = (state.pointer.x * Math.PI) / 10;
        ref.current.rotation.z += (mouseX - ref.current.rotation.z) * 0.1;
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Icosahedron args={[1, 15]} ref={ref} scale={isMobile ? 1.8 : 2.8}>
                <MeshDistortMaterial
                    color="#0a0a0a"
                    emissive="#7c3aed"
                    emissiveIntensity={0.45}
                    roughness={0.08}
                    metalness={0.85}
                    distort={0.42}
                    speed={2}
                />
            </Icosahedron>
        </Float>
    );
};

const FluidBackground = () => {
    const { theme } = useTheme();

    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 8] }} gl={{ antialias: true, alpha: true }}>
                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 5]} intensity={2} color="#8b5cf6" />
                <directionalLight position={[-10, -10, -5]} intensity={2} color="#a855f7" />

                <LiquidShape />
            </Canvas>
            <div
                className="absolute inset-0 opacity-40 md:opacity-80 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at center, transparent 0%, transparent 60%, ${theme === 'light' ? 'rgba(255,255,255,0.8)' : 'black'} 100%)`,
                }}
            />
        </div>
    );
};

export default FluidBackground;
