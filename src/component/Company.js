import React, { Component } from 'react';
import RightSidebar from './RightSidebar'
import Footer from './Footer'
import Header1 from './Header1';
import Slideshow from './Slideshow';
import ProductList from './ProductList';
import '../css/Company.css';

const pathsToImages = ["/img/Wille/slider1.jpg", "/img/Wille/slider2.jpg", "/img/Wille/slider3.jpg", "/img/Wille/slider4.jpg"]

class Company extends Component {
    render() {
        return (
            <div className="company"> 
                <Header1 />
                <Slideshow images={pathsToImages}/>
                <ProductList products={["produkt1","produkt2","produkt3","produkt4"]} 
                             logo={"img/Wille/wille-logo.png"}
                             image={["/img/Wille/masina1.jpg","/img/Wille/masina2.jpg","/img/Wille/masina3.jpg","/img/Wille/masina4.jpg"]}
                             />
                <RightSidebar video={"https://www.youtube.com/embed/tgbNymZ7vqY"} pdf={"/catalogs/masina1.pdf"}/>
                <Footer />
            </div>
        );
    }
}

export default Company;