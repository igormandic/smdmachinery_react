import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import '../css/image-gallery.css';
import '../css/Gallery.css';

const images = [
    
  {
    original: '/img/Wille/masina1.jpg',
    thumbnail: '/img/Wille/masina1.jpg',
  },
  {
    original: '/WILLE/265/265_studio_front.jpg',
    thumbnail: '/WILLE/265/265_studio_front.jpg',
  },
  {
    original: '/WILLE/265/265_studio_pose.jpg',
    thumbnail: '/WILLE/265/265_studio_pose.jpg',
  },
];
 
class Gallery extends React.Component {
  render() {
    return ( 
      <div>
        <ImageGallery items={images} /> 
        </div>
        );
  }
}
  
  export default Gallery;