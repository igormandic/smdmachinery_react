import React, { Component } from 'react';
import Footer from './Footer'
import Header from './Header'
import SelectMenu from './SelectMenu'
import RightSidebar from './RightSidebar'

class Product extends Component {
  render(){
    return (
        <div className="Product">
          <Header />
          <SelectMenu />
          <RightSidebar video={"https://www.youtube.com/embed/tgbNymZ7vqY"} pdf={"/catalogs/masina1.pdf"}/>
          <Footer/>
      </div>
    );
  }
}

export default Product;