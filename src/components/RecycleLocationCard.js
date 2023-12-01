import React, { useState, useRef } from 'react';
import './LocationCard.css';

function RecycleLocationCard() {
  return (
      <div className="location-container">
        <div className='location-header'>
            <p><img src="/periscope.png" className="periscope" />Recycle Location Drop Points</p>
        </div>
        <div className='location-collection'>
            <div className='all-card'>
              <div className='location-card'>
              <a href="https://www.preciousplasticth.org/en/" target="_blank" rel="noopener noreferrer">
                <h3>Precious Plastic Bangkok</h3>
                <p className='line'></p>
                <p className='location-detail'>77, Nakhon Sawan Road, Pa Somanat Temple, Pom Prap Sattru Phai District Bangkok 10100</p>
                <p><img src="/arrow.png" className="location-arrow" /></p>
              </a>
              </div>
              <div className='location-card'>
              <a href="https://maps.app.goo.gl/DPQWUtpRfDxfZqMRA" target="_blank" rel="noopener noreferrer">
                <h3>Value Waste & Recycle</h3>
                <p className='line'></p>
                <p className='location-detail'>22 1, Chiang Rak Noi, Bang Pa-in District, Phra Nakhon Si Ayutthaya 13180</p>
                <p><img src="/arrow.png" className="location-arrow" /></p>
              </a>
              </div>
            </div>
            <div className='all-card'>
            <div className='location-card'>
              <a href="https://greenroadenterprise.com/" target="_blank" rel="noopener noreferrer">
                <h3>Green Road</h3>
                <p className='line'></p>
                <p className='location-detail'>148/7, Makhuea Chae, Mueang Lamphun District, Lamphun 51000</p>
                <p><img src="/arrow.png" className="location-arrow-right" /></p>
              </a>
              </div>
              <div className='location-card'>
              <a href="https://www.psffoundation.com/" target="_blank" rel="noopener noreferrer">
                <h3>Power For Sustainable Future Foundation</h3>
                <p className='line'></p>
                <p className='location-detail'>555/1 Vibhavadi-Rangsit Road, Chatuchak District, Bangkok, 10900</p>
                <p><img src="/arrow.png" className="location-arrow-right" /></p>
              </a>
              </div>
            </div>
        </div>
    </div>
  );
}

export default RecycleLocationCard;