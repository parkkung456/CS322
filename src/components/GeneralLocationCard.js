import React, { useState, useRef } from 'react';
import './LocationCard.css';

function GeneralLocationCard() {
  return (
      <div className="location-container">
        <div className='location-header'>
            <p><img src="/periscope.png" className="periscope" />Recycle Location Drop Points</p>
        </div>
        <div className='location-collection'>
            <div className='all-card'>
              <div className='location-card'>
              <a href="https://www.circularsolution.co.th/" target="_blank" rel="noopener noreferrer">
                <h3>Circular Solution</h3>
                <p className='line'></p>
                <p className='location-detail'>159/105 Kanchanapisek Road, Thap Chang, Saphan Sung, Bangkok 10250.</p>
                <p><img src="/arrow.png" className="location-arrow" /></p>
              </a>
              </div>
              <div className='location-card'>
              <a href="https://global-protech.com/" target="_blank" rel="noopener noreferrer">
                <h3>GLOBAL PROTECH</h3>
                <p className='line'></p>
                <p className='location-detail'>88/46 Moo 11 Soi Kingkaew 37 Kingkaew rd. T.Rajathewa Bangplee, Samutprakarn 10540</p>
                <p><img src="/arrow.png" className="location-arrow" /></p>
              </a>
              </div>
            </div>
            <div className='all-card'>
            <div className='location-card'>
              <a href="https://maps.app.goo.gl/4bH52j6fKjZKWMnA7" target="_blank" rel="noopener noreferrer">
                <h3>Eurowest Engineering</h3>
                <p className='line'></p>
                <p className='location-detail'>120 Kasemkit Building, Leelom Road, Suriyawongse, Bangrak, Bangkok 10500</p>
                <p><img src="/arrow.png" className="location-arrow-right" /></p>
              </a>
              </div>
              <div className='location-card'>
              <a href="https://www.thanakom.co.th/" target="_blank" rel="noopener noreferrer">
                <h3>Bangkok Tanakom</h3>
                <p className='line'></p>
                <p className='location-detail'>No.2 Soi Ramkhamhaeng 40 Yaek 2
, Ramkhamhaeng Road, Huamark, Bangkapi,
Bangkok 10240</p>
                <p><img src="/arrow.png" className="location-arrow-right" /></p>
              </a>
              </div>
            </div>
        </div>
    </div>
  );
}

export default GeneralLocationCard;