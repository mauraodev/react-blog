import React from 'react';

// import uxIcon from '../../assets/ux-carrousel-icon.svg';
// import frontIcon from '../../assets/front-carrousel-icon.svg';
// import deployIcon from '../../assets/deploy-carrousel-icon.svg';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { number } from '@storybook/addon-knobs';

// import { Card } from './styles'

const ServicesCarousel = () => {
  const mainGroupId = 'Main';
  
  const buttonStyle = {
    backgroundColor: '#2F2C2C',
    textTransform: 'uppercase',
    color: '#fff',
    width: '196px',
    height: '36px',
    borderRadius: '20px',
    border: '0',
    transition: 'color 0.2s',
    marginBottom: '19px',
  };

  const hrStyle = {
    color: '#000',
    borderTop: '1px solid',
    width: '90%',
    opacity: '10%',
  };

  const pStyle = {
    fontWeight: 'lighter',
    fontSize: '14px',
    width: '90%',
  };
  
  const h1Style = {
    fontSize: '16px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    width: '90%',
  };

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '426px',
    width: '322px',
    color: '#fff',
    textAlign: 'center',
    background: 'linear-gradient(#449fd8, #1b699a)',
    borderRadius: '20px',
    marginLeft: '50%',
    marginRight: '50%'
    
  };

  return (
    <Carousel
      showArrows={true}
      autoplay={true}
      showStatus={false}
      showIndicators={true}
      infiniteLoop={true}
      showThumbs={false}
      autoPlay={false}
      centerSlidePercentage={number('centerSlidePercentage', 80, {}, mainGroupId)}
      >

      <div style={cardStyle}>
        <h1 style={h1Style}>UI e UX Design</h1>
        <p style={pStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum ali</p>
        <hr style={hrStyle}/>
        <p style={pStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum ali</p>
        <button style={buttonStyle}>entre em contato</button>
      </div>

      <div style={cardStyle}>
       <h1 style={h1Style}>UI e UX Design</h1>
        <p style={pStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum ali</p>
        <hr style={hrStyle}/>
        <p style={pStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum ali</p>
        <button style={buttonStyle}>entre em contato</button>
      </div>
      
      <div style={cardStyle}>
        <h1 style={h1Style}>UI e UX Design</h1>
        <p style={pStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum ali</p>
        <hr style={hrStyle}/>
        <p style={pStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum ali</p>
        <button style={buttonStyle}>entre em contato</button>
      </div>
      
    </Carousel>

  )
}

export default ServicesCarousel;
