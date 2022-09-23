import React from 'react'
import './Services.css'
import heartemoji from '../../img/heartemoji.png'
import glasses from '../../img/glasses.png'
import humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from '../Services/NaqeebCv.pdf';

function Services() {
  return (
    <div className="services">
        {/* left */}
        <div className="s-left">
            <span>My Awesome</span>
            <span>Services</span>
            <span>I will create and develop the awesome design of mobile and web application
                <br/>
                and these applications are fully responsive
                 </span>
                 <a href={Resume} download>
                 <button style={{fontSize:'18px'}}  className="button s-button">Download Cv </button>
                 </a>
                 <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
        </div>
        <div className="s-right">
            
            <div style={{left:'14rem'}} className="card">
            <Card emoji={heartemoji} 
            heading='Design'
            detail='Figma, Adobe, Adobe illustrator, Photoshop'/>
            </div>

            <div style={{left:'-4rem', top:'14rem'}} className="card">
            <Card emoji={glasses} 
            heading='Developer'
            detail='React JS, React Native, CSS3'/>
            </div>

            <div style={{left:'12rem', top:'19rem'}} className="card">
            <Card emoji={humble} 
            heading='UX/UI'
            detail='Redux, Canva, Boostrap'/>
            </div>
            <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>

        </div>
    </div>
  )
}

export default Services
