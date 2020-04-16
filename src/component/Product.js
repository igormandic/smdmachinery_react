import React, { Component } from 'react';
import Footer from './Footer'
import Header1 from './Header1'
import SelectMenu from './SelectMenu'
import '../css/Product.css';

class Product extends Component {
  componentWillMount() {
    console.log(this.props.location);
    if(this.props.match.params.nameProduct) 
        this.setState({name:this.props.match.params.nameProduct});
}
  render(){
    return (
        <div className="product">
          <Header1 />
          <img className="headImg" src="/WILLE/265/head_image.jpg" alt="WILLE 265"></img>
          <SelectMenu className="selectMenu"/>
          <Footer/>
      </div>
    );
  }
}

export default Product;