import React from 'react';
import { Fade } from 'react-slideshow-image';
import '../css/Slideshow.css'

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}
 
class Slideshow extends React.Component {
  render(){ 
    return (
      <div className="slide-container">
        <Fade {...fadeProperties}>
          <div className="each-fade">
            <div className="image-container">
              <img src={this.props.images[0]} alt="img1"/>
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={this.props.images[1]} alt="img1"/>
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={this.props.images[2]} alt="img1"/>
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={this.props.images[3]} alt="img1"/>
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={this.props.images[4]} alt="img1"/>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Slideshow;