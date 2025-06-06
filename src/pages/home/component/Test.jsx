// Test.jsx
import React, { useEffect, useRef } from 'react';
import { Viewer } from '@photo-sphere-viewer/core';
import '@photo-sphere-viewer/core/index.css';

const Test = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const baseUrl = 'https://photo-sphere-viewer-data.netlify.app/assets/';
    const viewer = new Viewer({
      container: containerRef.current,
      panorama: '/assets/img/360/rotation.jpg',
    });

    return () => {
      viewer.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="viewer"
      style={{ width: '100%', height: '600px', borderRadius: '10px' }}
    />
  );
};

export default Test;
