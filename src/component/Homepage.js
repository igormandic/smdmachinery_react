import React from 'react';
import './../App.css';
import Header from './Header';
import Slideshow from './Slideshow';
import RightSidebar from './RightSidebar';
import Footer from './Footer';
import NB from './NB';
import CompanyList from './CompanyList';

const pathsToImages = ["/img/masina1.jpg", "/img/masina2.jpg", "/img/masina3.jpg", "/img/masina1.jpg", "/img/masina2.jpg"]
class Homepage extends React.Component {

  render() {
    return (
      <div className="App">
          <Header />
          <NB type={"home"} numOfElement={6}/>
          <Slideshow images={pathsToImages}/>
          <CompanyList />
          <RightSidebar video={"https://www.youtube.com/embed/tgbNymZ7vqY"} pdf={"/catalogs/masina1.pdf"}/>
          <Footer/>
      </div>
    );
  }

}

export default Homepage;