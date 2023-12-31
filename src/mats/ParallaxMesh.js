import * as THREE from 'three';
import { useTexture } from '@react-three/drei'
import ParallaxMaterial from './ParallaxMaterial'
import { parallaxcontrols } from './parallaxcontrols'
import { useControls } from 'leva'

function ParallaxMesh({geometry, color, config, textureUrl, ...props}) {
  const { ...pconfig } = useControls(parallaxcontrols)
   
  if (!textureUrl) textureUrl = './textures/speckles.png';

  const texture = useTexture(textureUrl);
  texture.minFilter = THREE.LinearMipMapLinearFilter;
  texture.magFilter = THREE.LinearMipMapLinearFilter;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return (
    <>
        <mesh geometry={geometry} {...props}>
          <ParallaxMaterial texture={texture} isShaderMaterial config={{...config, ...pconfig}} opacity={config.opacity} transparent={true} />
        </mesh>
    </>
  );
}

export default ParallaxMesh;
