import React, { Component } from 'react';
import Header from './Header'
import RightSidebar from './RightSidebar'
import Footer from './Footer'
import NB from './NB';
import Slideshow from './Slideshow';
import ProductList from './ProductList';

const pathsToImages = ["/img/Wille/slider2.jpg", "/img/masina2.jpg", "/img/masina3.jpg", "/img/masina1.jpg", "/img/masina2.jpg"]

class Company extends Component {
    render() {
        return (
            <div className="Company">
                <Header />
                <NB type={"product"} numOfElement={8}/>
                <Slideshow images={pathsToImages}/>
                <ProductList products={["produkt1","produkt2","produkt3","produkt4"]} 
                             logo={"img/Wille/wille-logo.png"}
                             image={["/img/Wille/masina1.jpg","/img/Wille/masina2.jpg","/img/Wille/masina3.jpg","/img/Wille/masina4.jpg"]}
                             />
                <RightSidebar video={"https://www.youtube.com/embed/tgbNymZ7vqY"} pdf={"/catalogs/masina1.pdf"}/>
                <Footer />
                <p>{this.props.location.about}</p>
            </div>
        );
    }
}

export default Company;