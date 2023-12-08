import React, { useState, useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import Modal from 'react-modal';
import placeholderImage from './placehold.jpg'; // Import your placeholder image
import './UploadImage.css';
import './WebcamUpload.css'; // Import a separate CSS file for styling
import RecycleLocationCard from './RecycleLocationCard';
import HazardLocationCard from './HazardLocationCard';
import GeneralLocationCard from './GeneralLocationCard';
import ComposLocationCard from './ComposLocationCard';

function WebcamUpload() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [prediction, setPrediction] = useState(null);
    const [capturedImage, setCapturedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [boxShadowColor, setBoxShadowColor] = useState('white');
    const [imagePreview, setImagePreview] = useState(placeholderImage);
    const [showRecycle, setShowRecycle] = useState(false);
    const [showGeneral, setShowGeneral] = useState(false);
    const [showComposable, setShowComposable] = useState(false);
    const [showHazardous, setShowHazardous] = useState(false);
    const webcamRef = useRef(null);
  
    useEffect(() => {
      setIsModalOpen(true);
    }, []);
  
    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  
    const capture = () => {
      const imageSrc = webcamRef.current.getScreenshot();
      const blob = dataURItoBlob(imageSrc);
  
      setSelectedFile(new File([blob], 'webcam-image.png'));
      setCapturedImage(imageSrc);
      setIsModalOpen(false);
      setImagePreview(null); // Set placeholder image to null when capturing
    };
  
    const handlePredict = () => {
      const formData = new FormData();
      formData.append('image', selectedFile);
  
      fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          setPrediction(data.class);
        })
        .catch((error) => console.error('Error:', error));
    };

  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: 'image/png' });
  };

  useEffect(() => {
    // Set the box shadow color based on the prediction value
    switch (prediction && prediction.toUpperCase()) {
      case 'RECYCLE':
        setBoxShadowColor('#e7a500');
        setShowRecycle(true);
        break;
      case 'COMPOSABLE':
        setBoxShadowColor('green');
        setShowComposable(true);
        break;
      case 'GENERAL':
        setBoxShadowColor('blue');
        setShowGeneral(true);
        break;
      case 'HAZARDOUS':
        setBoxShadowColor('red');
        setShowHazardous(true);
        break;
      default:
        setBoxShadowColor('white');
    }
  }, [prediction]);

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Webcam Modal"
        className="webcam-modal"
        overlayClassName="webcam-overlay"
      >
        <Webcam className='camera'
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/png"
          width={640}
          height={480}
        />
        <div className="button-container">
          <button onClick={capture}>Capture</button>
          <button onClick={() => setIsModalOpen(false)}>Close</button>
        </div>
      </Modal>

      <div className='upload-image-container2'>
        <div className='image-holder2'>
          {capturedImage ? (
            <img src={capturedImage} alt="Captured" style={{ borderRadius: '10px', width: '365px', height: '250px' }} />
          ) : (
            <img className='image-preview' src={imagePreview} alt='Selected' />
          )}
          <button className='predict-button2' onClick={handlePredict}>Predict</button>
        </div>
        <div className='upload-right' style={{ boxShadow: `0 0 10px ${boxShadowColor}` }}>
        {prediction && (
          <div className='waste-type'>
            {prediction.toUpperCase()} WASTE
            {showRecycle && prediction.toUpperCase() === 'RECYCLE' && (
              <div className='paragraph-word'>
                <div className='color'>
                  <div >Should be disposed into </div>
                  <div style={{ color: '#e7a500',  marginLeft: '6px'  } }> YELLOW</div>
                  <div style={{ marginLeft: '6px' }}> containers</div>
                </div>
                <div className='detail'> Recycling is the process of collecting, processing, 
                and transforming materials that would otherwise be thrown away as trash into 
                new products. This helps reduce the consumption of fresh raw materials, energy 
                usage, and pollution. Blue containers is a common practice in many waste management 
                systems. These containers are specifically designated for recyclable materials.</div>
                <RecycleLocationCard />
              </div>
            )}
            {prediction.toUpperCase() === 'COMPOSABLE' && (
              <div className='paragraph-word'>
                <div>Should be disposed into </div>
                  <div className='color'style={{ color: 'green' }}> GREEN</div>
                  <div className='color'> containers</div>
                  <div className='detail'> Compostable waste primarily consists of organic materials such 
                  as kitchen scraps, coffee grounds, yard waste, and certain biodegradable items. Green 
                  containers are specifically designated for compostable waste. The use of color-coded 
                  containers makes it easy for individuals to separate compostable materials from other 
                  types of waste, facilitating proper waste management. </div>
                  <ComposLocationCard />
            </div>
            )}
            {prediction.toUpperCase() === 'GENERAL' && (
              <div className='paragraph-word'>
              <div>Should be disposed into </div>
              <div className='color'style={{ color: 'blue' }}> BLUE</div>
              <div className='color'> containers</div>
              <div className='detail'> General waste, also known as residual waste or municipal 
              solid waste, includes everyday items that are not categorized as hazardous, recyclable, 
              or compostable.  yellow containers or containers with yellow labels designates them for 
              the disposal of general waste. Color-coding helps individuals and waste management systems 
              distinguish between different types of waste, facilitating proper sorting and disposal.</div>
              <GeneralLocationCard />
            </div>
            )}
            {prediction.toUpperCase() === 'HAZARDOUS' && (
              <div className='paragraph-word2'>
              <div>Should be disposed into </div>
              <div className='color'style={{ color: 'red' }}> RED</div>
              <div className='color'> containers</div>
              <div className='detail'> Hazardous waste is a category of waste that contains substances 
              or has properties that make it potentially harmful to human health or the environment. 
              This can include industrial chemicals, solvents, pesticides, batteries, electronic waste, 
              and certain medical waste. Red containers, or containers with red labels, signifies 
              that they are specifically designated for the disposal of hazardous waste.</div>
                <HazardLocationCard />
            </div>
            )}
          </div>
          )}
      </div>        
    </div>
    </div>
  );
}

export default WebcamUpload;
