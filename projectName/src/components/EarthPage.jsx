// src/components/EarthPage.js

import React, { useEffect, useRef } from 'react';
import Earth from '3d-earth';

function EarthPage() {
    const earthContainerRef = useRef();

    useEffect(() => {
        const earth = new Earth(earthContainerRef.current, {
            // Your configuration options here
            width: 800,
            height: 600,
            zoom: 1,
            autoRotate: true,
            autoRotateSpeed: 0.5,
            backgroundColor: '#000',
            markers: [
                { lat: 40.7128, lng: -74.0060, label: 'New York' },
                { lat: 34.0522, lng: -118.2437, label: 'Los Angeles' },
                // Add more markers as needed
            ]
        });

        return () => {
            // Cleanup function to destroy the Earth instance
            earth.destroy();
        };
    }, []);

    return (
        <div ref={earthContainerRef} className="w-full h-screen"></div>
    );
}

export default EarthPage;
