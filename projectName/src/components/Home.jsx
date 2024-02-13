import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function Home() {
    const containerRef = useRef();

    useEffect(() => {
        // Scene
        const scene = new THREE.Scene();

        // Camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // Renderer
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(renderer.domElement);

        // Background Image
        const textureLoader = new THREE.TextureLoader();
        const backgroundImage = textureLoader.load('background.jpg');
        scene.background = backgroundImage;

        // Render loop
        const animate = function () {
            requestAnimationFrame(animate);

            // Add animation or other logic here

            renderer.render(scene, camera);
        };

        animate();

        // Cleanup
        return () => {
            if (containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
                renderer.dispose();
            }
        };
    }, []);

    return <div ref={containerRef} />;
}

export default Home;






