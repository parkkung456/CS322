import React, { useState, useEffect } from 'react';
import './UploadImage.css';
import placeholderImage from './placehold.jpg'; // Import your placeholder image
import RecycleLocationCard from './RecycleLocationCard';
import HazardLocationCard from './HazardLocationCard';
import GeneralLocationCard from './GeneralLocationCard';
import ComposLocationCard from './ComposLocationCard';

export const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(placeholderImage);
  const [prediction, setPrediction] = useState(null);
  const [boxShadowColor, setBoxShadowColor] = useState('white'); // Initialize with a default color
  const [showRecycle, setShowRecycle] = useState(false);
  const [showGeneral, setShowGeneral] = useState(false);
  const [showComposable, setShowComposable] = useState(false);
  const [showHazardous, setShowHazardous] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedFile(file);

      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreview(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      setImagePreview(placeholderImage);
    }
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
    <div className='upload-image-container'>
      <div className='image-holder'>
          <img className='image-preview' src={imagePreview} alt='Selected'  />
          <input type='file' accept='image/*' onChange={handleFileChange} />
      </div>
      <button className='predict-button' onClick={handlePredict}>START PREDICT</button>
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
              <div className='paragraph-word'>
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
  );
};
