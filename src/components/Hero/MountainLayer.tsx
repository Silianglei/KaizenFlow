import React from 'react';

interface MountainLayerProps {
  className?: string;
  speed: number;
  color: string;
}

export default function MountainLayer({ className = '', speed, color }: MountainLayerProps) {
  // Generate random triangles
  const generateTriangles = () => {
    let triangles = '';
    for (let i = 0; i < 6; i++) { // Reduced from 12 to 6 triangles
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = 25 + Math.random() * 45; // Slightly larger size range
      triangles += `<path d="M${x} ${y}L${x + size/2} ${y - size}L${x + size} ${y}Z" fill="${color}" fill-opacity="0.15"/>`;
    }
    return triangles;
  };

  return (
    <div 
      className={`absolute inset-0 ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E${encodeURIComponent(generateTriangles())}%3C/svg%3E")`,
        backgroundSize: '80vh 80vh', // Slightly increased for better spacing
        backgroundRepeat: 'repeat',
        animation: `slide ${speed}s linear infinite`,
        willChange: 'transform'
      }}
    />
  );
}