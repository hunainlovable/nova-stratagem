import React, { useRef, useEffect } from 'react';
// @ts-ignore
import * as THREE from 'three';

interface Props {
  platform: string;
  blueprint: string;
  size: any;
}

const Server3DPreview: React.FC<Props> = ({ platform, blueprint, size }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const width = 340;
    const height = 320;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 3, 8);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    if (mountRef.current) mountRef.current.appendChild(renderer.domElement);

    // Glassy base
    const baseGeo = new THREE.BoxGeometry(2.2, 0.18, 1.2);
    const baseMat = new THREE.MeshPhysicalMaterial({
      color: '#232b3a',
      roughness: 0.18,
      metalness: 0.7,
      transparent: true,
      opacity: 0.92,
      transmission: 0.7,
      clearcoat: 1,
      clearcoatRoughness: 0.08,
    });
    const base = new THREE.Mesh(baseGeo, baseMat);
    base.position.y = -1.2;
    scene.add(base);

    // Server stack: number of units based on RAM/CPU
    const ramNum = size?.ram ? parseInt(size.ram) || 1 : 1;
    const cpuNum = size?.cpu || 2;
    const unitCount = Math.max(2, Math.ceil((ramNum + cpuNum) / 3));
    for (let i = 0; i < unitCount; i++) {
      const unitGeo = new THREE.BoxGeometry(2, 0.22, 1);
      const unitMat = new THREE.MeshPhysicalMaterial({
        color: '#232b3a',
        metalness: 0.8,
        roughness: 0.18,
        clearcoat: 1,
        clearcoatRoughness: 0.08,
        reflectivity: 0.5,
        transmission: 0.2,
      });
      const unit = new THREE.Mesh(unitGeo, unitMat);
      unit.position.y = -1 + i * 0.25;
      scene.add(unit);

      // Indicator lights (RAM, CPU, SSD, Transfer)
      const lightColors = ['#0ea5e9', '#a78bfa', '#fbbf24', '#34d399'];
      const specVals = [ramNum, cpuNum, parseInt(size?.ssd) || 20, parseInt(size?.transfer) || 1];
      for (let j = 0; j < 4; j++) {
        const ledGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.12 + 0.08 * Math.min(4, Math.log10(specVals[j] + 1)), 16);
        const ledMat = new THREE.MeshStandardMaterial({
          color: lightColors[j],
          emissive: lightColors[j],
          emissiveIntensity: 0.8,
          metalness: 0.6,
        });
        const led = new THREE.Mesh(ledGeo, ledMat);
        led.position.x = -0.8 + j * 0.55;
        led.position.y = unit.position.y + 0.08;
        led.position.z = 0.56;
        led.rotation.x = Math.PI / 2;
        scene.add(led);
      }
    }

    // Glassy front reflection
    const glassGeo = new THREE.PlaneGeometry(2, unitCount * 0.25 + 0.2);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: '#fff',
      transparent: true,
      opacity: 0.08,
      transmission: 0.9,
      roughness: 0.1,
    });
    const glass = new THREE.Mesh(glassGeo, glassMat);
    glass.position.set(0, -1 + (unitCount * 0.25) / 2, 0.52);
    scene.add(glass);

    // Neon accent light
    const neon = new THREE.PointLight('#0ea5e9', 1.2, 10);
    neon.position.set(0, 2, 2);
    scene.add(neon);

    // Ambient light
    scene.add(new THREE.AmbientLight('#a78bfa', 0.3));

    // Animation loop
    let frame = 0;
    const animate = () => {
      frame++;
      base.rotation.y = Math.sin(frame / 120) * 0.1;
      glass.rotation.y = Math.sin(frame / 120) * 0.1;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      renderer.dispose();
      if (mountRef.current) mountRef.current.innerHTML = '';
    };
  }, [platform, blueprint, size]);

  return (
    <div className="flex flex-col items-center mt-2 mb-2">
      <div ref={mountRef} style={{ width: 340, height: 320, borderRadius: 18, boxShadow: '0 4px 32px #0ea5e966', background: 'rgba(16,22,36,0.7)' }} />
      {size && (
        <div className="mt-2 px-4 py-2 rounded-xl bg-slate-900/80 text-slate-200 font-mono text-xs shadow border border-slate-800 flex flex-col items-center">
          <div>RAM: <span className="text-blue-200 font-bold">{size.ram}</span> | CPU: <span className="text-blue-200 font-bold">{size.cpu} vCPUs</span></div>
          <div>SSD: <span className="text-blue-200 font-bold">{size.ssd}</span> | Transfer: <span className="text-blue-200 font-bold">{size.transfer}</span></div>
        </div>
      )}
      <div className="text-slate-400 text-xs font-mono mt-2">Live 3D Server Rack Preview</div>
    </div>
  );
};

export default Server3DPreview; 