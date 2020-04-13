import React from 'react';
import './../App.css';
import Header1 from './Header1';
import Slideshow from './Slideshow';
import Footer from './Footer';
import CompanyList from './CompanyList';
import RightSidebar from './RightSidebar';
import Contact from './Contact';

const pathsToImages = ["/img/masina1.jpg", "/img/masina2.jpg", "/img/masina3.jpg", "/img/masina4.jpg"]
class Homepage extends React.Component {

  render() {
    return (
      <div className="App">
          <Header1 type={"home"} numOfElement={6}/>
          <Slideshow images={pathsToImages}/>
          <CompanyList />
          <RightSidebar />
          {/* https://www.youtube.com/embed/W8151PerJtE */}
          <Footer/>
      </div>
      );
  }

}

export default Homepage;