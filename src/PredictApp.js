import React, { useState, useRef } from 'react';
import { UploadImage } from './components/UploadImage';
import WebcamUpload from './components/WebcamUpload';
import './PredictApp.css';

function PredictApp() {
  const [showUploadImage, setShowUploadImage] = useState(false);
  const [showWebcamUpload, setshowWebcamUpload] = useState(false);

    
  const handleUploadButtonClickCam = () => {
    setshowWebcamUpload(true);
    setShowUploadImage(false);
  };

  const handleUploadButtonClick = () => {
    setShowUploadImage(true);
    setshowWebcamUpload(false);
  };
  
  return (
      <div className="container">
        <div className="left-container">
            <span>Sorting is caring,</span>
            <span>for the planet</span>
            <span>we're repairing.</span>
            <div className='buttonContainer'>
              <button className="uploadButton" onClick={handleUploadButtonClick}>UPLOAD IMAGE</button>
              <button className="captureButton" onClick={handleUploadButtonClickCam}>USE WEBCAM ➜</button>
            </div>
            {showUploadImage && <UploadImage />}
            {showWebcamUpload && <WebcamUpload />}
        </div>
        <div className="right-container">
          <img src='/illustratorPredict.png' alt="Right Image" />
        </div>
        </div>
      
  );
}

export default PredictApp;
