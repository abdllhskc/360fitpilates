import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Torus, Environment, Float } from '@react-three/drei';

const Ring = (props) => {
    const meshRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        meshRef.current.rotation.x = Math.cos(t / 4) / 2;
        meshRef.current.rotation.y = Math.sin(t / 4) / 2;
        meshRef.current.rotation.z = Math.sin(t / 1.5) / 2;
        // meshRef.current.position.y = Math.sin(t / 1.5) / 10;
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Torus ref={meshRef} args={[3.5, 0.05, 16, 100]} {...props}>
                <meshStandardMaterial
                    color="#E2725B"
                    roughness={0.2}
                    metalness={0.8}
                />
            </Torus>
            <Torus ref={meshRef} args={[3, 0.02, 16, 100]} rotation={[1, 0, 0]} {...props}>
                <meshStandardMaterial
                    color="#E2725B"
                    roughness={0.2}
                    metalness={0.8}
                />
            </Torus>
        </Float>
    );
};

const Hero3D = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Ring />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
};

export default Hero3D;
