import React, { Component } from 'react';
import Footer from './Footer';
import Header1 from './Header1';
import SelectMenu from './SelectMenu';
import SelectMenuAttachment from './SelectMenuAttachment';
import '../css/Product.css';

class Product extends Component {
  UNSAFE_componentWillMount() {
    if (this.props.match.params.product) {
        this.setState({name:this.props.match.params.product});
    }
    window.scrollTo(0, 0);
  }
  componentDidUpdate(nextProps, _nextState) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.setState({name:this.props.match.params.product})
    }
    window.scrollTo(0, 0);
  }

  render(){
    const name = this.state.name;
    const nameOfCompany = window.localStorage.getItem("nameOfCompany");
    const pathToHeadImage = `/${nameOfCompany}/${name}/head_image.jpg`;
    const alt = `${nameOfCompany} ${name}`;
    let typeOfSelectMenu = [];
    if (nameOfCompany === "Wille") {
      typeOfSelectMenu.push(<SelectMenu key={name} name={name} nameOfCompany={nameOfCompany} className="selectMenu"/>)
    } else if (nameOfCompany === "Broddson") {
      typeOfSelectMenu.push(<SelectMenuAttachment key={name} name={name} nameOfCompany={nameOfCompany} />);
    }
    return (
        <div className="product">
          <Header1 name={nameOfCompany} type="company"/>
          <img className="headImg" src={pathToHeadImage} alt={alt}></img>
          {typeOfSelectMenu}
          {/* <SelectMenu name={name} nameOfCompany={nameOfCompany} className="selectMenu"/> */}
          <Footer/>
      </div>
    );
  }
}

export default Product;