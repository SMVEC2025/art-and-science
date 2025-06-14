import React, { useRef, useEffect, useState } from 'react';
import 'aframe'; // Import A-Frame
import { Scene, Entity } from 'aframe-react'; // If using aframe-react

const ThreeSixtyViewer = ({ imageUrl }) => {
    const sceneRef = useRef(null);
    const [vrMode, setVrMode] = useState(false); // To toggle VR mode

    useEffect(() => {
        // Handle device orientation for gyroscope control
        const handleDeviceOrientation = (event) => {
            if (sceneRef.current && !vrMode) {
                // Adjust rotation based on gyroscope data (alpha, beta, gamma)
                // You'll need to map these values to A-Frame's rotation
                // A-Frame's default camera often handles this automatically in VR mode
                // For non-VR mode, you might need to apply rotation to a camera entity
                // or a container entity.
            }
        };

        window.addEventListener('deviceorientation', handleDeviceOrientation);

        return () => {
            window.removeEventListener('deviceorientation', handleDeviceOrientation);
        };
    }, [vrMode]);

    // Function to enter VR mode
    const enterVR = () => {
        // A-Frame scenes have an enterVR() method
        if (sceneRef.current && sceneRef.current.tagName === 'A-SCENE') {
            sceneRef.current.enterVR();
            setVrMode(true);
        }
    };

    // Function to exit VR mode (A-Frame typically handles this automatically when leaving VR)
    const exitVR = () => {
        if (sceneRef.current && sceneRef.current.tagName === 'A-SCENE') {
            sceneRef.current.exitVR();
            setVrMode(false);
        }
    };

    return (
        <div>
            {/* Basic UI for VR/AR mode toggles */}
            {!vrMode && <button onClick={enterVR}>Enter VR</button>}
            {vrMode && <button onClick={exitVR}>Exit VR</button>}

            <Scene ref={sceneRef} vr-mode-ui="enabled: true"> {/* Enable A-Frame's default VR UI */}
                <a-sky src={`/assets/img/360/canteen.jpg`}></a-sky> {/* Use a-sky for 360 images */}
                {/* You can add more entities here for AR or interactive elements */}
                <a-camera user-was-moved="true"></a-camera> {/* Default A-Frame camera with basic movement */}
            </Scene>
        </div>
    );
};

export default ThreeSixtyViewer;