import React from 'react';
import './App.css';
import Header from './component/Header';
import Slideshow from './component/Slideshow';
import RightSidebar from './component/RightSidebar';
import Footer from './component/Footer';
import NB from './component/NB';
import SelectMenu from './component/SelectMenu';

const pathsToImages = ["/img/masina1.jpg", "/img/masina2.jpg", "/img/masina3.jpg", "/img/masina1.jpg", "/img/masina2.jpg"]
class Company1 extends React.Component {

  render() {
    return (
      <div className="Company1">
          <Header />
          <NB />
          <Slideshow images={pathsToImages}/>
          <SelectMenu />
          <RightSidebar video={"https://www.youtube.com/embed/tgbNymZ7vqY"} pdf={"/catalogs/masina1.pdf"}/>
          <Footer/>
      </div>
    );
  }

}

export default Company1;