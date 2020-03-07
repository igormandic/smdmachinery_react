import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './component/Header';
import Slideshow from './component/Slideshow';
import Footer from './component/Footer';

const pathsToImages = ["/img/masina1.jpg", "/img/masina2.jpg", "/img/masina3.jpg", "/img/masina1.jpg", "/img/masina2.jpg"]
class App extends React.Component {

  render() {
    return (
      <div className="App">
          <Header />
          <Slideshow images={pathsToImages}/>
          <Footer/>
      </div>
    );
  }

}
export default App;