'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  originalX: number;
  originalY: number;
  scrollRandomX: number;
  scrollRandomY: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const createTDPoints = () => {
      const centerX = window.innerWidth / 2; // Center on screen
      const centerY = 280; // Moved down from 240
      const points: { x: number; y: number }[] = [];
      
      // T points (shifted left to make room for D, even bigger and more spread)
      // Top horizontal bar (even more spread out)
      points.push({ x: centerX - 170, y: centerY - 35 });
      points.push({ x: centerX - 100, y: centerY - 35 });
      points.push({ x: centerX - 30, y: centerY - 35 });
      
      // Vertical stem (even more spread out)
      points.push({ x: centerX - 100, y: centerY - 35 });
      points.push({ x: centerX - 100, y: centerY + 11.25 });
      points.push({ x: centerX - 100, y: centerY + 58.75 });
      points.push({ x: centerX - 100, y: centerY + 105 });
      
      // T decorative serifs
      
      // T bottom serif
      points.push({ x: centerX - 110, y: centerY + 110 });
      points.push({ x: centerX - 90, y: centerY + 110 });
      
      // D points (to the right of T, even bigger and more spread)
      // Vertical stem of D (same height as T)
      points.push({ x: centerX + 40, y: centerY - 35 });
      points.push({ x: centerX + 40, y: centerY + 11.25 });
      points.push({ x: centerX + 40, y: centerY + 58.75 });
      points.push({ x: centerX + 40, y: centerY + 105 });
      
      // Top curve of D
      points.push({ x: centerX + 70, y: centerY - 35 });
      points.push({ x: centerX + 100, y: centerY - 25 });
      points.push({ x: centerX + 125, y: centerY - 12 });
      
      // Middle curve of D (extends further right)
      points.push({ x: centerX + 145, y: centerY + 35 });
      
      // Bottom curve of D (extends further right)
      points.push({ x: centerX + 125, y: centerY + 82 });
      points.push({ x: centerX + 100, y: centerY + 95 });
      points.push({ x: centerX + 70, y: centerY + 105 });
      
      return points;
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const isNearTD = (x: number, y: number) => {
      const centerX = window.innerWidth / 2;
      const centerY = 280; // Moved down from 240
      
      // Check if particle is near any TD point
      const tdPoints = createTDPoints();
      for (const point of tdPoints) {
        const distance = Math.sqrt((x - point.x) ** 2 + (y - point.y) ** 2);
        if (distance < 120) { // 120px exclusion zone around TD
          return true;
        }
      }
      return false;
    };

    const initParticles = () => {
      const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 15000));
      particlesRef.current = [];

      // Create TD particles
      const tdPoints = createTDPoints();
      tdPoints.forEach((point, index) => {
        particlesRef.current.push({
          x: point.x + (Math.random() - 0.5) * 8,
          y: point.y + (Math.random() - 0.5) * 8,
          vx: 0,
          vy: 0,
          radius: 2.5,
          color: `hsl(${200 + Math.random() * 60}, 70%, ${50 + Math.random() * 20}%)`, // Same colors as other particles
          originalX: point.x,
          originalY: point.y,
          scrollRandomX: Math.random() * Math.PI * 2,
          scrollRandomY: Math.random() * Math.PI * 2
        });
      });

      // Create background particles
      for (let i = 0; i < particleCount; i++) {
        let x, y;
        let attempts = 0;
        
        // Try to find a position not near the T
        do {
          // Random position with organic offset to prevent grid formation
          const baseX = Math.random() * canvas.width;
          const baseY = Math.random() * canvas.height;
          
          // Add organic offset based on particle index to break alignment
          const organicX = baseX + Math.sin(i * 0.7) * 100;
          const organicY = baseY + Math.cos(i * 0.3) * 100;
          
          x = Math.max(20, Math.min(canvas.width - 20, organicX));
          y = Math.max(20, Math.min(canvas.height - 20, organicY));
          
          attempts++;
        } while (isNearTD(x, y) && attempts < 50); // Max 50 attempts to avoid infinite loop
        
        particlesRef.current.push({
          x,
          y,
          vx: 0,  // Start with no velocity
          vy: 0,  // Start with no velocity
          radius: Math.random() * 2 + 1,
          color: `hsl(${200 + Math.random() * 60}, 70%, ${50 + Math.random() * 20}%)`,
          originalX: x,
          originalY: y,
          scrollRandomX: Math.random() * Math.PI * 2,
          scrollRandomY: Math.random() * Math.PI * 2
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    const animate = () => {
      // Clear canvas with slight fade for subtle trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const mouseInfluence = 150;
      const scrollInfluence = scrollRef.current * 0.1;

      particlesRef.current.forEach((particle, index) => {
        // Mouse interaction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseInfluence) {
          const force = (1 - distance / mouseInfluence) * 2;
          particle.vx -= (dx / distance) * force * 0.02;
          particle.vy -= (dy / distance) * force * 0.02;
        }

        // Scroll influence - only apply when actually scrolling
        if (scrollRef.current > 0) {
          const scrollWaveX = Math.sin(scrollInfluence * 0.02 + particle.scrollRandomX) * 0.02;
          const scrollWaveY = Math.cos(scrollInfluence * 0.03 + particle.scrollRandomY) * 0.02;
          const scrollPulse = Math.sin(scrollInfluence * 0.01 + particle.scrollRandomX * 0.5) * 0.015;
          
          particle.vx += scrollWaveX + scrollPulse;
          particle.vy += scrollWaveY + scrollPulse;
        }

        // Very weak return force - particles can still settle
        particle.vx += (particle.originalX - particle.x) * 0.0001;  // Much weaker
        particle.vy += (particle.originalY - particle.y) * 0.0001;  // Much weaker

        // Apply velocity
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Damping
        particle.vx *= 0.98;
        particle.vy *= 0.98;

        // No wrapping - let particles go off screen and return home naturally

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Draw connections with dynamic scroll effects
        particlesRef.current.slice(index + 1).forEach(otherParticle => {
          const dx = otherParticle.x - particle.x;
          const dy = otherParticle.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Dynamic connection distance based on scroll
          const baseDistance = 100;
          const scrollModulation = Math.sin(scrollInfluence * 0.05) * 30;
          const connectionDistance = baseDistance + scrollModulation;
          
          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            
            // Dynamic opacity based on scroll
            const baseOpacity = 0.2;
            const scrollOpacity = Math.sin(scrollInfluence * 0.03) * 0.1;
            const opacity = (baseOpacity + scrollOpacity) * (1 - distance / connectionDistance);
            
            ctx.strokeStyle = `rgba(100, 200, 255, ${opacity})`;
            ctx.lineWidth = 0.5 + Math.sin(scrollInfluence * 0.02) * 0.2;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const cleanup = () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    animate();

    return cleanup;
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default ParticleBackground;
