import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { TextureLoader, WebGLRenderer, AnimationMixer, AmbientLight } from "three";

const Model = () => {
  const modelRef = useRef(null);
  const mixerRef = useRef(null);

  useEffect(() => {
    const loader = new FBXLoader();
    const textureLoader = new TextureLoader();

    loader.load("/model2.fbx", (fbx) => {
      fbx.scale.set(0.1, 0.1, 0.1); // Increased scale
      modelRef.current = fbx;

      // Load high-resolution texture
      const texture = textureLoader.load("/high_res_texture.png", (tex) => {
        const renderer = new WebGLRenderer();
        const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();
        tex.anisotropy = maxAnisotropy;
      });

      // Apply texture to the model
      fbx.traverse((child) => {
        if (child.isMesh) {
          child.material.map = texture;
          child.material.needsUpdate = true;
        }
      });

      // Animation Handling
      if (fbx.animations.length > 0) {
        const mixer = new AnimationMixer(fbx);
        const action = mixer.clipAction(fbx.animations[0]);
        action.play();
        mixerRef.current = mixer;
      }
    });
  }, []);

  useFrame((_, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
  });

  return modelRef.current ? <primitive object={modelRef.current} /> : null;
};

export default function App() {
  return (
    <Canvas camera={{ position: [0, 1.5, 3], fov: 50 }}> {/* Adjusted Camera */}
      <ambientLight intensity={0.8} />
      <Model />
    </Canvas>
  );
}
