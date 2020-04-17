import React, { Component } from 'react';
import Footer from './Footer'
import Header1 from './Header1'
import SelectMenu from './SelectMenu'
import '../css/Product.css';

class Product extends Component {
  componentWillMount() {
    if (this.props.match.params.product) {
        this.setState({name:this.props.match.params.product});
    }
  }

  componentDidUpdate(nextProps, _nextState) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.setState({name:this.props.match.params.product})
    }
  }

  render(){
    const name = this.state.name;
    const nameOfCompany = window.localStorage.getItem("nameOfCompany");
    const pathToHeadImage = `/${nameOfCompany}/${name}/head_image.jpg`;
    return (
        <div className="product">
          <Header1 name={nameOfCompany} type="company"/>
          <img className="headImg" src={pathToHeadImage} alt="WILLE 265"></img>
          <SelectMenu name={name} nameOfCompany={nameOfCompany} className="selectMenu"/>
          <Footer/>
      </div>
    );
  }
}

export default Product;