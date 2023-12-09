import React, { useState, useRef } from 'react';
import { UploadImage } from './components/UploadImage';
import WebcamUpload from './components/WebcamUpload';
import './PredictApp.css';

import predictP from "./assets/eco6.svg";

function PredictApp() {
  const [showUploadImage, setShowUploadImage] = useState(false);
  const [showWebcamUpload, setshowWebcamUpload] = useState(false);

  // Create a ref for the UploadImage component
  const uploadImageRef = useRef(null);

  const handleUploadButtonClickCam = () => {
    setshowWebcamUpload(true);
    setShowUploadImage(false);
  };

  const handleUploadButtonClick = () => {
    setShowUploadImage(true);
    setshowWebcamUpload(false);

    // Scroll to the UploadImage component when it is shown
    if (uploadImageRef.current) {
      window.scrollTo({
        top: uploadImageRef.current.offsetTop,
        behavior: 'smooth', // Optional: Add smooth scrolling effect
      });
    }
  };

  return (
    <div className="container2">
      <div className="left-container">
        <span>Sorting is caring,</span>
        <span>for the planet</span>
        <span>we're repairing.</span>
        <div className='buttonContainer'>
          <button className="uploadButton" onClick={handleUploadButtonClick}>UPLOAD IMAGE</button>
          <button className="captureButton" onClick={handleUploadButtonClickCam}>USE WEBCAM ➜</button>
        </div>
        {showUploadImage && <UploadImage ref={uploadImageRef} />}
        {showWebcamUpload && <WebcamUpload />}
      </div>
      <div className="right-container">
        <img src={predictP} alt="Right Image" height={600}/>
      </div>
    </div>
  );
}

export default PredictApp;
