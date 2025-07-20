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

const RegionSelectorGlobe: React.FC<Props> = ({ onSelect }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hoveredRegion, setHoveredRegion] = useState<Region | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [search, setSearch] = useState('');

  // Filtered region list for sidebar
  const filteredRegions = REGIONS.filter(r => r.name.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    const width = 520;
    const height = 520;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 3.2;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    if (mountRef.current) mountRef.current.appendChild(renderer.domElement);

    // Globe
    const globeGeometry = new THREE.SphereGeometry(1, 64, 64);
    const globeMaterial = new THREE.MeshStandardMaterial({
      color: '#181f2e',
      roughness: 0.7,
      metalness: 0.4,
      emissive: '#0ea5e9',
      emissiveIntensity: 0.08,
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);

    // Aura
    const auraGeometry = new THREE.SphereGeometry(1.08, 64, 64);
    const auraMaterial = new THREE.MeshBasicMaterial({
      color: '#a78bfa',
      transparent: true,
      opacity: 0.13,
      side: THREE.BackSide,
    });
    const aura = new THREE.Mesh(auraGeometry, auraMaterial);
    scene.add(aura);

    // Light
    const light = new THREE.PointLight(0xffffff, 1.2, 100);
    light.position.set(5, 5, 5);
    scene.add(light);

    // Markers
    const markerMeshes: { mesh: THREE.Mesh; region: Region }[] = [];
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
      markerMeshes.push({ mesh: marker, region });
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
        }
      } else {
        setHoveredRegion(null);
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
          setSelectedRegion(found.region);
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
      markerMeshes.forEach(({ mesh, region }) => {
        (mesh.material as THREE.MeshStandardMaterial).emissive.set(
          hoveredRegion && hoveredRegion.code === region.code ? '#fbbf24' : '#0ea5e9'
        );
        mesh.scale.setScalar(hoveredRegion && hoveredRegion.code === region.code ? 1.6 : 1);
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
    <div className="flex w-full max-w-5xl mx-auto" style={{ minHeight: 520 }}>
      {/* Sidebar */}
      <div className="w-64 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 mr-8 flex flex-col gap-4 luxury-cell">
        <input
          type="text"
          placeholder="Search region..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-slate-300 font-mono mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <div className="flex-1 overflow-y-auto">
          {filteredRegions.map(region => (
            <div
              key={region.code}
              className={`px-3 py-2 rounded-lg mb-1 cursor-pointer font-mono text-lg transition-all duration-200 ${selectedRegion && selectedRegion.code === region.code ? 'bg-blue-500/30 text-blue-200 font-bold' : 'hover:bg-blue-400/20 text-white'}`}
              onClick={() => {
                setSelectedRegion(region);
                onSelect(region);
              }}
            >
              {region.name}
            </div>
          ))}
        </div>
      </div>
      {/* Globe */}
      <div className="flex-1 flex flex-col items-center justify-center relative">
        <div ref={mountRef} style={{ width: 520, height: 520, borderRadius: 32, boxShadow: '0 8px 48px #0ea5e966' }} />
        {hoveredRegion && (
          <div
            style={{
              position: 'absolute',
              left: 260,
              top: 40,
              background: 'rgba(30,41,59,0.97)',
              color: '#fff',
              padding: '12px 28px',
              borderRadius: 16,
              pointerEvents: 'none',
              fontSize: 22,
              fontFamily: 'JetBrains Mono, monospace',
              zIndex: 10,
              boxShadow: '0 2px 24px #0ea5e9cc',
              whiteSpace: 'nowrap',
            }}
          >
            {hoveredRegion.name}
          </div>
        )}
      </div>
    </div>
  );
};

export default RegionSelectorGlobe; 