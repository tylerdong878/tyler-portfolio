'use client';

import { useEffect, useRef } from 'react';

const MouseFollower = () => {
  const followerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const followerPosition = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      if (followerRef.current) {
        // Smooth following with easing
        const easing = 0.1;
        followerPosition.current.x += (mousePosition.current.x - followerPosition.current.x) * easing;
        followerPosition.current.y += (mousePosition.current.y - followerPosition.current.y) * easing;

        followerRef.current.style.left = `${followerPosition.current.x}px`;
        followerRef.current.style.top = `${followerPosition.current.y}px`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const cleanup = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return cleanup;
  }, []);

  return (
    <>
      {/* Main glow effect */}
      <div
        ref={followerRef}
        className="fixed pointer-events-none z-30 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 30%, rgba(0, 0, 0, 0) 70%)',
          filter: 'blur(40px)',
          borderRadius: '50%',
        }}
      />
      
      {/* Secondary smaller glow for more intensity */}
      <div
        className="fixed pointer-events-none z-30 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, rgba(59, 130, 246, 0.1) 40%, rgba(0, 0, 0, 0) 70%)',
          filter: 'blur(20px)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};

export default MouseFollower;
