import React, { Component } from 'react';
import '../css/CompanyList.css';
import { ListGroup } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class ProductList extends Component {

    render() {

        let items = [];
        let products = this.props.products;
        let logoFirme = this.props.logo;
        let images = this.props.image;

        for(let i=0; i < products.length; i++){
            items.push(
                <ListGroup.Item variant="dark" className="companyBox">
                    <Link to={{pathname:"/company/product/", info:"sve sto treba za tu firmu"}}>
                        <span className ="company"> {products[i]} </span> 
                        <img className="logo" src={logoFirme} alt=""></img>
                        <img className="machine" src={images[i]} alt=""></img>
                        <span className="arrow"><FaArrowRight /></span>
                    </Link>
                </ListGroup.Item>
            )
        }

        return (
            <div className="wrap">
                <div className="homepage">
                    <ListGroup  className= "companyList" >
                        {items}
                    </ListGroup>
                </div>
            </div>
    );
    }
}

export default ProductList;