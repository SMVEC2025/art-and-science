import React from 'react';
import { PanoramaViewer } from 'react-pannellum-next';

const Test = () => {
  const hotSpots = [
    {
      pitch: 10, // Vertical angle
      yaw: 20,   // Horizontal angle
      type: 'info',
      text: 'This is the main entrance!',
      cssClass: 'custom-hotspot-info', // Optional: for custom styling
      // You can add onClick handlers or other custom props here
      // onClick: () => alert('Welcome!')
    },
    {
      pitch: -5,
      yaw: -90,
      type: 'scene', // For linking to another 360 scene (requires tour config)
      text: 'Go to the living room',
      sceneId: 'livingRoomScene', // If you have multiple panoramas in a tour
      html:`<p>hello</p>`
    },
    // Add more hotspots as needed
  ];

  return (
    <div style={{ width: '100%', height: '500px' }}>
      {/*
        The <PanoramaViewer> component is a placeholder.
        You'll need to replace it with the actual component
        from the 360 viewer library you choose (e.g., Pannellum, Photo Sphere Viewer).
        The props (imagePath, hotSpots) might vary slightly based on the library.
      */}
      <PanoramaViewer
        imagePath="/assets/img/360/rotation.jpg" // Replace with the actual path to your 360 image
        hotSpots={hotSpots}
        autoLoad={true}
        showZoomCtrl={true}
        showFullscreenCtrl={true}
        // ... other props specific to your chosen 360 viewer library
      />
    </div>
  );
};

export default Test;