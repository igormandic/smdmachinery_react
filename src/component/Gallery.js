import React from 'react';
import ImageGallery from 'react-image-gallery';
import '../css/image-gallery.css';
import '../css/Gallery.css';

class Gallery extends React.Component {
  render() {
    const pathForImage = `/${this.props.nameOfCompany}/${this.props.name}/`;
    const images = [
    
      {
        original: `${pathForImage}masina1.jpg`,
        thumbnail: `${pathForImage}masina1.jpg`,
      },
      {
        original: `${pathForImage}masina2.jpg`,
        thumbnail: `${pathForImage}masina2.jpg`,
      },
      {
        original: `${pathForImage}masina3.jpg`,
        thumbnail: `${pathForImage}masina3.jpg`,
      },
    ];
    return ( 
      <div>
        <ImageGallery items={images} /> 
      </div>
    );
  }
}
  
  export default Gallery;