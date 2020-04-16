import React from 'react';
import ImageGallery from 'react-image-gallery';
import '../css/image-gallery.css';
import '../css/Gallery.css';

const images = [
    
  {
    original: '/img/Wille/masina1.jpg',
    thumbnail: '/img/Wille/masina1.jpg',
  },
  {
    original: '/WILLE/265/masina2.jpg',
    thumbnail: '/WILLE/265/masina2.jpg',
  },
  {
    original: '/WILLE/265/masina3.jpg',
    thumbnail: '/WILLE/265/masina3.jpg',
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