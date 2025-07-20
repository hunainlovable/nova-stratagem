import React, { useRef, useEffect, useState } from 'react';
// @ts-ignore
import * as THREE from 'three';

interface Region {
  name: string;
  code: string;
  lat: number;
  lng: number;
}

const REGIONS: Region[] = [
  { name: 'Ohio', code: 'us-east-2', lat: 40, lng: -83 },
  { name: 'Virginia', code: 'us-east-1', lat: 37, lng: -78 },
  { name: 'Oregon', code: 'us-west-2', lat: 44, lng: -120 },
  { name: 'Montreal', code: 'ca-central-1', lat: 45.5, lng: -73.6 },
  { name: 'Ireland', code: 'eu-west-1', lat: 53, lng: -8 },
  { name: 'London', code: 'eu-west-2', lat: 51.5, lng: -0.1 },
  { name: 'Paris', code: 'eu-west-3', lat: 48.8, lng: 2.3 },
  { name: 'Frankfurt', code: 'eu-central-1', lat: 50.1, lng: 8.7 },
  { name: 'Stockholm', code: 'eu-north-1', lat: 59.3, lng: 18.1 },
  { name: 'Tokyo', code: 'ap-northeast-1', lat: 35.7, lng: 139.7 },
  { name: 'Seoul', code: 'ap-northeast-2', lat: 37.5, lng: 127 },
  { name: 'Sydney', code: 'ap-southeast-2', lat: -33.9, lng: 151.2 },
  { name: 'Singapore', code: 'ap-southeast-1', lat: 1.3, lng: 103.8 },
  { name: 'Mumbai', code: 'ap-south-1', lat: 19.1, lng: 72.9 },
];

interface Props {
  onSelect: (region: Region) => void;
}

const RegionSelector3D: React.FC<Props> = ({ onSelect }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hoveredRegion, setHoveredRegion] = useState<Region | null>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; region: Region } | null>(null);

  useEffect(() => {
    const width = 500;
    const height = 500;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 3.2;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    if (mountRef.current) mountRef.current.appendChild(renderer.domElement);

    // Luxury gradient globe (ocean)
    const globeGeometry = new THREE.SphereGeometry(1, 64, 64);
    const globeMaterial = new THREE.ShaderMaterial({
      uniforms: {
        color1: { value: new THREE.Color('#0ea5e9') }, // blue
        color2: { value: new THREE.Color('#a78bfa') }, // purple
        color3: { value: new THREE.Color('#34d399') }, // teal
      },
      vertexShader: `varying vec3 vPosition;
        void main() {
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: `uniform vec3 color1;
        uniform vec3 color2;
        uniform vec3 color3;
        varying vec3 vPosition;
        void main() {
          float y = vPosition.y * 0.5 + 0.5;
          float x = vPosition.x * 0.5 + 0.5;
          vec3 grad = mix(color1, color2, y);
          grad = mix(grad, color3, x);
          gl_FragColor = vec4(grad, 1.0);
        }`,
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);

    // Procedural "continents" using glowing blobs
    for (let i = 0; i < 12; i++) {
      const blobGeo = new THREE.SphereGeometry(0.18 + Math.random() * 0.08, 32, 32);
      const blobMat = new THREE.MeshBasicMaterial({
        color: [
          '#a78bfa', // purple
          '#0ea5e9', // blue
          '#34d399', // teal
          '#fbbf24', // gold
        ][i % 4],
        transparent: true,
        opacity: 0.18 + Math.random() * 0.12,
      });
      const blob = new THREE.Mesh(blobGeo, blobMat);
      // Randomly distribute blobs on globe
      const lat = Math.random() * Math.PI - Math.PI / 2;
      const lon = Math.random() * 2 * Math.PI;
      blob.position.x = Math.cos(lat) * Math.cos(lon);
      blob.position.y = Math.sin(lat);
      blob.position.z = Math.cos(lat) * Math.sin(lon);
      blob.lookAt(0, 0, 0);
      globe.add(blob);
    }

    // Atmospheric aura
    const auraGeometry = new THREE.SphereGeometry(1.08, 64, 64);
    const auraMaterial = new THREE.MeshBasicMaterial({
      color: '#a78bfa',
      transparent: true,
      opacity: 0.18,
      side: THREE.BackSide,
    });
    const aura = new THREE.Mesh(auraGeometry, auraMaterial);
    scene.add(aura);

    // Light
    const light = new THREE.PointLight(0xffffff, 1.2, 100);
    light.position.set(5, 5, 5);
    scene.add(light);

    // Markers
    const markerMeshes: { mesh: THREE.Mesh; region: Region; label: THREE.Sprite }[] = [];
    const spriteMaterial = (text: string) => {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 64;
      const ctx = canvas.getContext('2d')!;
      ctx.font = 'bold 28px JetBrains Mono, monospace';
      ctx.fillStyle = '#fff';
      ctx.shadowColor = '#0ea5e9';
      ctx.shadowBlur = 16;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, 128, 32);
      const texture = new THREE.CanvasTexture(canvas);
      return new THREE.SpriteMaterial({ map: texture, transparent: true });
    };
    REGIONS.forEach(region => {
      const markerGeo = new THREE.SphereGeometry(0.045, 24, 24);
      const markerMat = new THREE.MeshStandardMaterial({ color: '#fff', emissive: '#0ea5e9', emissiveIntensity: 1 });
      const marker = new THREE.Mesh(markerGeo, markerMat);
      const phi = (90 - region.lat) * (Math.PI / 180);
      const theta = (region.lng + 180) * (Math.PI / 180);
      marker.position.x = Math.sin(phi) * Math.cos(theta);
      marker.position.y = Math.cos(phi);
      marker.position.z = Math.sin(phi) * Math.sin(theta);
      globe.add(marker);
      // Label
      const label = new THREE.Sprite(spriteMaterial(region.name));
      label.position.copy(marker.position.clone().multiplyScalar(1.13));
      label.scale.set(0.5, 0.13, 1);
      scene.add(label);
      markerMeshes.push({ mesh: marker, region, label });
    });

    // Raycaster for interactivity
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    function onPointerMove(event: MouseEvent) {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(markerMeshes.map(m => m.mesh));
      if (intersects.length > 0) {
        const found = markerMeshes.find(m => m.mesh === intersects[0].object);
        if (found) {
          setHoveredRegion(found.region);
          setTooltip({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
            region: found.region,
          });
        }
      } else {
        setHoveredRegion(null);
        setTooltip(null);
      }
    }

    function onPointerDown(event: MouseEvent) {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(markerMeshes.map(m => m.mesh));
      if (intersects.length > 0) {
        const found = markerMeshes.find(m => m.mesh === intersects[0].object);
        if (found) {
          onSelect(found.region);
        }
      }
    }

    renderer.domElement.addEventListener('pointermove', onPointerMove);
    renderer.domElement.addEventListener('pointerdown', onPointerDown);

    // Animation loop
    const animate = () => {
      globe.rotation.y += 0.002;
      aura.rotation.y += 0.001;
      // Highlight hovered marker
      markerMeshes.forEach(({ mesh, region, label }) => {
        (mesh.material as THREE.MeshStandardMaterial).emissive.set(
          hoveredRegion && hoveredRegion.code === region.code ? '#fbbf24' : '#0ea5e9'
        );
        mesh.scale.setScalar(hoveredRegion && hoveredRegion.code === region.code ? 1.6 : 1);
        label.material.opacity = hoveredRegion && hoveredRegion.code === region.code ? 1 : 0.7;
      });
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      renderer.dispose();
      if (mountRef.current) mountRef.current.innerHTML = '';
      renderer.domElement.removeEventListener('pointermove', onPointerMove);
      renderer.domElement.removeEventListener('pointerdown', onPointerDown);
    };
    // eslint-disable-next-line
  }, [onSelect, hoveredRegion]);

  return (
    <div className="flex flex-col items-center relative" style={{ width: 500, height: 500 }}>
      <div ref={mountRef} style={{ width: 500, height: 500 }} />
      {tooltip && (
        <div
          style={{
            position: 'absolute',
            left: tooltip.x + 10,
            top: tooltip.y - 10,
            background: 'rgba(30,41,59,0.95)',
            color: '#fff',
            padding: '6px 14px',
            borderRadius: 8,
            pointerEvents: 'none',
            fontSize: 16,
            fontFamily: 'JetBrains Mono, monospace',
            zIndex: 10,
            boxShadow: '0 2px 12px #0ea5e9cc',
          }}
        >
          {tooltip.region.name}
        </div>
      )}
      <p className="mt-4 text-white/80 text-lg font-mono">Select a region by clicking a marker</p>
    </div>
  );
};

export default RegionSelector3D; 