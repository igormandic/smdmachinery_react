import React from 'react';
import Header1 from './Header1';
import Footer from './Footer';
import ProductsSpecs from './ProductsSpecs';

class AllProducts extends React.Component {

  render() {
    return (
      <div className="allProducts">
          <Header1 type="company" name="Wille" />
          <ProductsSpecs path={this.props.location.pathname}/>
          <Footer/>
      </div>
      );
  }

}

export default AllProducts;