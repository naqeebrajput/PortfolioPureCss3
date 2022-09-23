import React from 'react'
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vactor1 from '../../img/Vector1.png';
import Vactor2 from '../../img/Vector2.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import me from '../../img/me.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';

function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span className='i-into' >Hy! I Am</span>
          <span>Naqeeb Rajput</span>
          <span>Website developer, Mobile application developer, UX/UI developer, Website and Mobile application design producting high Quality
          </span>
          <button className="button i-button">
            Hire Me
          </button>
          <div className="i-icons">
            <img src={Github} alt="" srcset="" />
            <img src={LinkedIn} alt="" srcset="" />
            <img src={Instagram} alt="" srcset="" />
          </div>
        </div>
      </div>
      <div className="i-right">
        <img src={Vactor1} alt="" srcset="" />
        <img src={Vactor2} alt="" srcset="" />
        <img src={me} alt="" srcset="" />
        <img src={glassesimoji} alt="" />
        <div>
          <FloatingDiv  image={crown} txt1='Web' txt2='Developer' />
        </div>
        <div className='secdiv' style={{top:'18rem', left:'-14rem'}}>
          <FloatingDiv image={thumbup} txt1='Mobile Application Developer' />
        </div>
        {/* blur divs */}
        <div className="blur" style={{background: "rgb(238 210 255)" }}></div>
        <div className="blur" style={{background: '#C1F5FF', top:'17rem', width:'21rem', height:'21rem', left:'-10rem'}}></div>
      </div>
    </div>
  )
}

export default Intro
