import React, { useState, useRef } from 'react';
import './LocationCard.css';

function ComposLocationCard() {
  return (
      <div className="location-container">
        <div className='location-header'>
            <p><img src="/periscope.png" className="periscope" />Recycle Location Drop Points</p>
        </div>
        <div className='location-collection'>
            <div className='all-card'>
              <div className='location-card'>
              <a href="https://waste2energy.co.th/" target="_blank" rel="noopener noreferrer">
                <h3>Waste 2 Energy</h3>
                <p className='line'></p>
                <p className='location-detail'>388/9-10 Soi Ramkhamhaeng 53 (Chansrichawala), Ramkhamhaeng Road, kwang Phlapphla Wangthonglang Bangkok 10310</p>
                <p><img src="/arrow.png" className="location-arrow2" /></p>
              </a>
              </div>
              <div className='location-card'>
              <a href="https://wms-thailand.com/" target="_blank" rel="noopener noreferrer">
                <h3>Waste Management Siam</h3>
                <p className='line'></p>
                <p className='location-detail'>965 Moo 2 Soi 3B Bangpoo Industrial Estate, Sukhumvit Rd
Bangpoo Mai, Muang Samutprakarn Samutprakarn 10280</p>
                <p><img src="/arrow.png" className="location-arrow2" /></p>
              </a>
              </div>
            </div>
            <div className='all-card'>
            <div className='location-card'>
              <a href="https://www.scieco.co.th/2017/" target="_blank" rel="noopener noreferrer">
                <h3>SCI Eco SERVICES</h3>
                <p className='line'></p>
                <p className='location-detail'>No.1 Thai Cement Road, Bangsue, Bangkok 10800 Thailand (Head Office 1, 9th Floor)</p>
                <p><img src="/arrow.png" className="location-arrow-right" /></p>
              </a>
              </div>
              <div className='location-card'>
              <a href="https://siammat.com/" target="_blank" rel="noopener noreferrer">
                <h3>SIAM MATERIAL</h3>
                <p className='line'></p>
                <p className='location-detail'>85/261 Moo 13 Omnoi, Krathum Baen, Samut Sakhon 74130 (Head Office)</p>
                <p><img src="/arrow.png" className="location-arrow-right" /></p>
              </a>
              </div>
            </div>
        </div>
    </div>
  );
}

export default ComposLocationCard;