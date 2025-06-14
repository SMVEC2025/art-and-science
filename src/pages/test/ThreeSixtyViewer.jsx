import React, { useRef, useEffect, useState } from 'react';
import 'aframe';
import { Scene, Entity } from 'aframe-react';
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";
import { BsHeadsetVr } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";
import VirtualTourHeader from '../../components/header/VirtualTourHeader';

const ThreeSixtyViewer = ({ imageUrl }) => {
    const sceneRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [inVRMode, setInVRMode] = useState(false);
    const [splitImage, setSplitImage] = useState(false)
    const [alive, setAlive] = useState(false)
    const [showSidebar,setShowSidebar] = useState(false)
    useEffect(() => {
        // --- Mobile Detection ---
        const checkIfMobile = () => {
            const userAgent = navigator.userAgent || navigator.vendor || window.opera;
            setIsMobile(/android|iphone|ipad|ipod|blackberry|windows phone/i.test(userAgent));
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        // --- A-Frame Event Listeners ---
        // Access the actual A-Frame DOM element via .el
        const sceneAFrameEl = sceneRef.current ? sceneRef.current.el : null;

        if (sceneAFrameEl) {
            console.log('A-Frame scene DOM element found:', sceneAFrameEl); // Debugging line

            const handleEnterVR = () => {
                console.log('Entered VR mode!');
                setInVRMode(true);
            };

            const handleExitVR = () => {
                console.log('Exited VR mode!');
                setInVRMode(false);
            };

            sceneAFrameEl.addEventListener('enter-vr', handleEnterVR);
            sceneAFrameEl.addEventListener('exit-vr', handleExitVR);

            // Cleanup function for useEffect
            return () => {
                window.removeEventListener('resize', checkIfMobile);
                if (sceneAFrameEl) { // Also check on cleanup
                    sceneAFrameEl.removeEventListener('enter-vr', handleEnterVR);
                    sceneAFrameEl.removeEventListener('exit-vr', handleExitVR);
                }
            };
        } else {
            console.log('A-Frame scene DOM element not yet available.'); // Debugging line
            // This might happen on the very first render before A-Frame fully initializes.
            // React will re-run this effect when sceneRef.current becomes available.
        }

        // Cleanup for resize listener (independent of A-Frame element)
        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };

    }, []); // Empty dependency array means this runs once on mount

    // Rest of your component code remains the same...

    const handleEnterVRClick = () => {

        // Also access the .el property here for entering VR
        if (sceneRef.current && sceneRef.current.el && sceneRef.current.el.tagName === 'A-SCENE') {
            sceneRef.current.el.enterVR(); // Call enterVR on the A-Frame element
        } else {
            console.warn("Attempted to enter VR, but A-Frame scene DOM element is not available.");
        }
    };

    const handleExitVRClick = () => {
        // Also access the .el property here for exiting VR
        if (sceneRef.current && sceneRef.current.el && sceneRef.current.el.tagName === 'A-SCENE') {
            sceneRef.current.el.exitVR(); // Call exitVR on the A-Frame element
        } else {
            console.warn("Attempted to exit VR, but A-Frame scene DOM element is not available.");
        }
    };
    function handleGridClose() {
        setSplitImage(false)
    }
    function handleEnter() {
        setAlive(true)
        setSplitImage(true)
    }
    function handleBoxLeave() {
        setAlive(false)
    }
    function handleLeave() {

        setSplitImage(false)

    }
    console.log("alive,", alive)
    return (
        <div className='tsv-main'>

            <VirtualTourHeader />
            <Scene ref={sceneRef}  > {/* The ref is set here to the React component instance */}
                <a-sky src={`/assets/img/360/new/garden1.jpg`}></a-sky>
                <a-camera user-was-moved="true"></a-camera>
            </Scene>
            <div className='footer'>
                <div className='left'><LuMoveLeft /></div>
                <div className='center' onClick={handleEnterVRClick}><BsHeadsetVr /></div>
                <div className='right'><LuMoveRight /></div>
            </div>


            {/* ///listing images */}

            <div className={`listing-images ${splitImage ? 'spread' : ''}`} onMouseLeave={handleLeave}>

                <div className='items' onMouseEnter={handleEnter}>
                    <img src="/assets/img/360/images/one.png" alt="" />
                </div >
                <div className='items' onMouseEnter={handleEnter}>
                    <img src="/assets/img/360/images/one.png" alt="" />
                </div >
                <div className='items' onMouseEnter={handleEnter}>
                    <img src="/assets/img/360/images/one.png" alt="" />
                </div >


            </div>

            <div className={`left_bar ${showSidebar?"show":""}`}
            onMouseEnter={()=>{setShowSidebar(true)}}
            onMouseLeave={()=>{setShowSidebar(false)}}
            >
                <div className='bar'>
                    <span className='true'>Campus</span>
                    <span >Labs</span>
                    <span >Facilities</span>
                     
                </div>

            </div>
        </div>


    );
};

export default ThreeSixtyViewer;