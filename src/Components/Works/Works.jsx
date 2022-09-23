import React from 'react'
import './Works.css'
import Facebook from '../../img/Facebook.png';
import amazon from '../../img/amazon.png';
import Upwork from '../../img/Upwork.png';
import fiverr from '../../img/fiverr.png';
import Shopify from '../../img/Shopify.png';

function Works() {
  return (
    <div className="works">
       <div className="s-left">
            <span>Works for All these</span>
            <span>Brands & Clients</span>
            <span>I will create and develop the awesome design of mobile and web application
                <br/>
                and these applications are fully responsive. 
                <br/>
                 </span>
                 <button  className="button s-button">Hire me </button>
                 <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
        </div>

        <div className="w-right">
          <div className="w-mainCircle">
            <div className="w-secCircle">
              <img src={Upwork} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={fiverr} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={amazon} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Shopify} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Facebook} alt="" />
            </div>
          </div>
        </div>

    </div>
  )
}

export default Works