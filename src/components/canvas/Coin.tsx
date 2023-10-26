import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Coin = () => {
  const earth = useGLTF('/models/coin/coin-17.gltf')
  return (
    <mesh>
      <directionalLight intensity={3} position={[-6, 10, 0]} />
      <directionalLight intensity={3} position={[6, -10, 0]} />
      <primitive
        object={earth.scene}
        scale={2.5}
        position-y={0}
        rotation-y={0}
        rotation-z={75}
      />
    </mesh>
  )
}

const CoinCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-10, 0, 0],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          rotateSpeed={2}
          autoRotateSpeed={10}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Coin />

        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default CoinCanvas
