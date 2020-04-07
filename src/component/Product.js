import React, { Component } from 'react';
import Footer from './Footer'
import Header from './Header'
import SelectMenu from './SelectMenu'
// import RightSidebar from './RightSidebar'
import '../css/Product.css';

class Product extends Component {
  render(){
    return (
        <div className="product">
          <Header />
          <img className="headImg" src="/WILLE/265/265_head_image.jpg" alt="WILLE 265"></img>
          <SelectMenu className="selectMenu"/>
          {/* <RightSidebar video={"https://www.youtube.com/embed/tgbNymZ7vqY"} pdf={"/catalogs/masina1.pdf"}/> */}
          <Footer/>
      </div>
    );
  }
}

export default Product;