
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticlesBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const frameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const mountEl = mountRef.current;
    if (!mountEl) return;

    // Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    // Append renderer to captured mount element
    mountEl.appendChild(renderer.domElement);

    // Create particles
    const particlesCount = 150;
    const positionsArray = new Float32Array(particlesCount * 3);
    const velocitiesArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Position
      positionsArray[i] = (Math.random() - 0.5) * 20; // x
      positionsArray[i + 1] = (Math.random() - 0.5) * 20; // y
      positionsArray[i + 2] = (Math.random() - 0.5) * 20; // z

      // Velocity
      velocitiesArray[i] = (Math.random() - 0.5) * 0.02; // x velocity
      velocitiesArray[i + 1] = (Math.random() - 0.5) * 0.02; // y velocity
      velocitiesArray[i + 2] = (Math.random() - 0.5) * 0.02; // z velocity
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positionsArray, 3));

    // Create particle material with blue theme
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x0369a1, // Blue color matching the theme
      size: 0.1,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Position camera
    camera.position.z = 5;

    // Store references
    sceneRef.current = scene;
    rendererRef.current = renderer;
    particlesRef.current = particles;

    // Animation
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);

      if (particlesRef.current) {
        const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
        
        for (let i = 0; i < positions.length; i += 3) {
          // Update positions with velocity
          positions[i] += velocitiesArray[i]; // x
          positions[i + 1] += velocitiesArray[i + 1]; // y
          positions[i + 2] += velocitiesArray[i + 2]; // z

          // Boundary check and reset
          if (Math.abs(positions[i]) > 10) {
            positions[i] = (Math.random() - 0.5) * 20;
            velocitiesArray[i] = (Math.random() - 0.5) * 0.02;
          }
          if (Math.abs(positions[i + 1]) > 10) {
            positions[i + 1] = (Math.random() - 0.5) * 20;
            velocitiesArray[i + 1] = (Math.random() - 0.5) * 0.02;
          }
          if (Math.abs(positions[i + 2]) > 10) {
            positions[i + 2] = (Math.random() - 0.5) * 20;
            velocitiesArray[i + 2] = (Math.random() - 0.5) * 0.02;
          }
        }

        particlesRef.current.geometry.attributes.position.needsUpdate = true;
        particlesRef.current.rotation.y += 0.001;
      }

      if (sceneRef.current && rendererRef.current) {
        rendererRef.current.render(sceneRef.current, camera);
      }
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (rendererRef.current) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      // Use captured references in the cleanup function
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
      window.removeEventListener('resize', handleResize);
      if (mountEl && renderer) {
        mountEl.removeChild(renderer.domElement);
      }
      if (renderer) {
        renderer.dispose();
      }
      if (particlesRef.current) {
        particlesRef.current.geometry.dispose();
        if (Array.isArray(particlesRef.current.material)) {
          particlesRef.current.material.forEach(material => material.dispose());
        } else {
          particlesRef.current.material.dispose();
        }
      }
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ zIndex: -1 }}
    />
  );
};

export default ParticlesBackground;
