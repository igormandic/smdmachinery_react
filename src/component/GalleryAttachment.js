import React from 'react';
import ImageGallery from 'react-image-gallery';
import '../css/image-gallery.css';
import '../css/Gallery.css';

class Gallery extends React.Component {
  render() {
    const pathForImage = `/${this.props.nameOfCompany}/Prikljucci/${this.props.name}/`;
    let images = [];
    if (this.props.name === "2") {
      images = [
        {
          original: `${pathForImage}masina1.jpg`,
          thumbnail: `${pathForImage}masina1.jpg`,
        }
      ];
    } else {
      images = [
        {
          original: `${pathForImage}masina1.jpg`,
          thumbnail: `${pathForImage}masina1.jpg`,
        },
        {
          original: `${pathForImage}masina2.jpg`,
          thumbnail: `${pathForImage}masina2.jpg`,
        },
      ];
    }

    return ( 
      <div>
        <ImageGallery items={images} /> 
      </div>
    );
  }
}
  
  export default Gallery;