import React, { useState } from 'react';

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

// Equirectangular projection for lat/lng to x/y
function project(lat: number, lng: number, width: number, height: number) {
  const x = ((lng + 180) / 360) * width;
  const y = ((90 - lat) / 180) * height;
  return { x, y };
}

interface Props {
  onSelect: (region: Region) => void;
}

const RegionSelectorMap: React.FC<Props> = ({ onSelect }) => {
  const [hovered, setHovered] = useState<Region | null>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; region: Region } | null>(null);
  const width = 700;
  const height = 350;

  return (
    <div className="relative flex flex-col items-center" style={{ width, height }}>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="rounded-3xl shadow-2xl" style={{ background: 'linear-gradient(135deg, #0ea5e9 0%, #a78bfa 60%, #34d399 100%)' }}>
        {/* Glassy overlay */}
        <rect x="0" y="0" width={width} height={height} rx={32} fill="white" fillOpacity={0.08} />
        {/* Subtle grid lines for context */}
        {[...Array(7)].map((_, i) => (
          <line key={i} x1={(i * width) / 6} y1={0} x2={(i * width) / 6} y2={height} stroke="#a78bfa" strokeOpacity={0.08} strokeWidth={2} />
        ))}
        {[...Array(4)].map((_, i) => (
          <line key={i} x1={0} y1={(i * height) / 3} x2={width} y2={(i * height) / 3} stroke="#a78bfa" strokeOpacity={0.08} strokeWidth={2} />
        ))}
        {/* Region markers */}
        {REGIONS.map(region => {
          const { x, y } = project(region.lat, region.lng, width, height);
          const isHovered = hovered && hovered.code === region.code;
          return (
            <g key={region.code}>
              <circle
                cx={x}
                cy={y}
                r={isHovered ? 18 : 12}
                fill={isHovered ? '#fbbf24' : '#0ea5e9'}
                filter="url(#glow)"
                style={{ transition: 'all 0.2s cubic-bezier(.4,2,.6,1)' }}
                onMouseEnter={e => {
                  setHovered(region);
                  setTooltip({ x: x + 20, y: y - 10, region });
                }}
                onMouseLeave={() => {
                  setHovered(null);
                  setTooltip(null);
                }}
                onClick={() => onSelect(region)}
                cursor="pointer"
              />
              {/* Label always visible, bolder on hover */}
              <text
                x={x}
                y={y - (isHovered ? 28 : 22)}
                textAnchor="middle"
                fontFamily="JetBrains Mono, monospace"
                fontWeight={isHovered ? 700 : 400}
                fontSize={isHovered ? 22 : 16}
                fill={isHovered ? '#fff' : '#e0e7ef'}
                style={{
                  textShadow: isHovered ? '0 2px 16px #0ea5e9, 0 1px 2px #000' : '0 1px 4px #0ea5e9',
                  transition: 'all 0.2s cubic-bezier(.4,2,.6,1)',
                  pointerEvents: 'none',
                }}
              >
                {region.name}
              </text>
            </g>
          );
        })}
        {/* SVG filter for neon glow */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
      {/* Tooltip */}
      {tooltip && (
        <div
          style={{
            position: 'absolute',
            left: tooltip.x,
            top: tooltip.y,
            background: 'rgba(30,41,59,0.97)',
            color: '#fff',
            padding: '8px 18px',
            borderRadius: 12,
            pointerEvents: 'none',
            fontSize: 18,
            fontFamily: 'JetBrains Mono, monospace',
            zIndex: 10,
            boxShadow: '0 2px 16px #0ea5e9cc',
            whiteSpace: 'nowrap',
          }}
        >
          {tooltip.region.name}
        </div>
      )}
      <p className="mt-4 text-white/80 text-lg font-mono">Select a region by clicking a marker</p>
    </div>
  );
};

export default RegionSelectorMap; 