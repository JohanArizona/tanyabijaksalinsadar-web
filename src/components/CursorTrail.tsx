'use client';
import { useEffect, useState } from 'react';

export default function CursorTrail() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div 
        className="fixed w-4 h-4 bg-cyan-400 rounded-full blur-xl pointer-events-none z-50 mix-blend-screen"
        style={{ left: position.x - 8, top: position.y - 8, transition: '0.1s' }}
      />
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-500 rounded-full animate-ping"
            style={{
              left: position.x,
              top: position.y,
              animationDelay: `${i * 0.05}s`,
              animationDuration: '1s'
            }}
          />
        ))}
      </div>
    </>
    );
}