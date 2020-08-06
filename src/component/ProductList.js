import React, { Component } from 'react';
import '../css/ProductList.css';
import { Link } from 'react-router-dom';
import { __ } from '../utils/i18n';

class ProductList extends Component {

    render() {
        let imagesArray = [];
        let products;
        let title;
        let text = [];
        let subTitle = "";
        const nameOfCompany = window.localStorage.nameOfCompany;
        if (nameOfCompany === "Wille") {
            products = ['265', '375', '465', '665', '865'];
            title = "title Wille";
            subTitle = "subTitle Wille";
            text = ["text 1 Wille", "text 2 Wille", "text 3 Wille", "text 4 Wille", "text 5 Wille"];
        } else if (nameOfCompany === "Broddson") {
            products = ["Nordic", "Scandia", "Fighter"];
            title = "title Broddson";
            text = ["text 1 Broddson", "text 2 Broddson", "text 3 Broddson"];
        }
        let textCompany = [];
        textCompany.push(<br key={5}></br>);
        let j = 200;
        let k = 200;
        for (let i = 0; i<text.length; i++) {
            textCompany.push(<p key={i} style={{textAlign:"justify", fontSize:"18px"}}>{__(text[i])}</p>);
            if (i === 1 && subTitle !== "") {
                textCompany.push(<br key={j + 1}></br>);
                textCompany.push(<h4 key={k - 1} style={{fontWeight:"bold"}}>{__(subTitle)}</h4>);
                j = j + 1;
                k = k - 1;
            }
        }

        for (let i = 0; i<products.length; i++) {
            let pathToProduct = `/company/${nameOfCompany}/product/${products[i]}`;
            let pahtToImage = `/${nameOfCompany}/${products[i]}/masina3.png`;
            let pathToLogo = `/${nameOfCompany}/logo.png`;
            imagesArray.push(
                <button key={i} className="btn_productList">
                    <Link style={{textDecoration: "none"}} key={i} to={pathToProduct}>
                    <div>
                        <img className="machine_logo_pl" src={pathToLogo} alt="machine_logo"/>
                        <img src={pahtToImage} alt="product" className="slika_pl"/>
                        <p className="nameOfProduct">{nameOfCompany} {products[i]}</p>
                        <div key={i} className="saznaj_vise_pl" > {__('learnMore')} </div> 
                    </div>
                    </Link>
                </button>);
        }
        return (
            <div className="company_middle">
                <div className="company_text"> 
                    <h2 style={{textAlign:"center", fontWeight:"bold"}}>{__(title)}</h2>
                    {textCompany} 
                </div>
                {imagesArray}
            </div>
        );
    }
}

export default ProductList;