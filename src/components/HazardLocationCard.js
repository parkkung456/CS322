import React, { useState, useRef } from 'react';
import './LocationCard.css';

function HazardLocationCard() {
  return (
      <div className="location-container">
        <div className='location-header'>
            <p><img src="/periscope.png" className="periscope" />Recycle Location Drop Points</p>
        </div>
        <div className='location-collection'>
            <div className='all-card'>
              <div className='location-card'>
              <a href="https://www.en-technology.com/" target="_blank" rel="noopener noreferrer">
                <h3>EN-TECHNOLOGY</h3>
                <p className='line'></p>
                <p className='location-detail'>Head Office 329 Building 2 2nd floor Moo 10, Old Tram Road Samutprakarn 10130</p>
                <p><img src="/arrow.png" className="location-arrow" /></p>
              </a>
              </div>
              <div className='location-card'>
              <a href="https://www.niquecorp.com/" target="_blank" rel="noopener noreferrer">
                <h3>NIQUE</h3>
                <p className='line'></p>
                <p className='location-detail'>79/29 Moo 19 Teparak road Tambon Bang Phli Yai
Amphoe Bang Phli, Samut Prakan, 10540, Thailand.</p>
                <p><img src="/arrow.png" className="location-arrow" /></p>
              </a>
              </div>
            </div>
            <div className='all-card'>
            <div className='location-card'>
              <a href="https://www.bwg.co.th/th/%e0%b8%ab%e0%b8%99%e0%b9%89%e0%b8%b2%e0%b8%ab%e0%b8%a5%e0%b8%b1%e0%b8%81/" target="_blank" rel="noopener noreferrer">
                <h3>Better World Green</h3>
                <p className='line'></p>
                <p className='location-detail'>488 Soi Ladprao 130 (Mahatthai 2), Klongchan Bangkapi, Bangkok 10240</p>
                <p><img src="/arrow.png" className="location-arrow-right" /></p>
              </a>
              </div>
              <div className='location-card'>
              <a href="https://www.worldtechmanagement.com/" target="_blank" rel="noopener noreferrer">
                <h3>World Tech Management</h3>
                <p className='line'></p>
                <p className='location-detail'>Moo 8 , Klong Tubchan, Aranyaprathet, Sa Kaeo 27120</p>
                <p><img src="/arrow.png" className="location-arrow-right" /></p>
              </a>
              </div>
            </div>
        </div>
    </div>
  );
}

export default HazardLocationCard;