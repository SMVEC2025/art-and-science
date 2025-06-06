import { useState, useRef } from "react";
import { IoMdPlay } from "react-icons/io";
import video from '/assets/video/video.mp4'
import TextLooper from "./Textlooper";


function Hero() {
  const [showVideo, setShowVideo] = useState(false)
  const videoRef = useRef(null);

  const handlePlay = () => {
    setShowVideo(true)
    setTimeout(() => {

      videoRef.current.play();
    }, 50);
  };

  return (
    <div className='hero-main'>
      <div className="overlay"></div>
      <div onClick={handlePlay} className={`play-btn ${showVideo ? "show" : "false"}`}>
        {showVideo ? (
          <>
            <div className="video-overlay"></div>

            <video
              ref={videoRef}
              preload="auto"
              controls={false}
              loop={true}

              width="640" height="360" >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </>

        ) : (<span><IoMdPlay /></span>
        )}
      </div>
      <div className="content">

        <h2>welcome to the</h2>
        <h1>best arts and science College</h1>
        <h4>In</h4>

        <h4><TextLooper/></h4>

        <div className="subtitle">A place with diverse nationalities, cultures and ideas</div>
        <button>Start your application</button>

      </div>
    </div>
  )
}

export default Hero