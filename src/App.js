import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './component/Header';
import Slideshow from './component/Slideshow';
import RightSidebar from './component/RightSidebar';
import Footer from './component/Footer';
import NB from './component/NB';
import Pocetna from './component/Pocetna'

const pathsToImages = ["/img/masina1.jpg", "/img/masina2.jpg", "/img/masina3.jpg", "/img/masina1.jpg", "/img/masina2.jpg"]
class App extends React.Component {

  render() {
    return (
      <div className="App">
          <Header />
          <NB />
          <Slideshow images={pathsToImages}/>
          <Pocetna />
          <RightSidebar video={"https://www.youtube.com/embed/tgbNymZ7vqY"} pdf={"/catalogs/masina1.pdf"}/>
          <Footer/>
      </div>
    );
  }

}
export default App;