import React from 'react';
import Header1 from './Header1';
import Footer from './Footer';
import ProductsSpecs from './ProductsSpecs';

class AllProducts extends React.Component {

  render() {
    console.log(this.props.location);
    return (
      <div className="allProducts">
          <Header1 type="company" name="WILLE" />
          <ProductsSpecs path={this.props.location.pathname}/>
          <Footer/>
      </div>
      );
  }

}

export default AllProducts;