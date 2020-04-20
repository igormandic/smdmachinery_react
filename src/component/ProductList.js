import React, { Component } from 'react';
import '../css/ProductList.css';
import { Link } from 'react-router-dom'

class ProductList extends Component {

    render() {
        let imagesArray = [];
        let products;
        const nameOfCompany = window.localStorage.nameOfCompany;
        if (nameOfCompany === "WILLE") {
            products = ['265', '375', '465', '665', '865'];
        } else if (nameOfCompany === "Broddson") {
            products = ["Nordic", "Scandia", '465', '665', '865'];
        }
        console.log(nameOfCompany)
        for (let i = 0; i<products.length; i++) {
            let pathToProduct = `/company/${nameOfCompany}/product/${products[i]}`;
            let pahtToImage = `/${nameOfCompany}/${products[i]}/masina3.jpg`;
            let pathToLogo = `/${nameOfCompany}/logo.png`;
            imagesArray.push(
                <button className="btn_productList">
                    <Link key={i} to={pathToProduct}>
                    <div>
                        <img className="machine_logo_pl" src={pathToLogo} alt="machine_logo"/>
                        <img src={pahtToImage} alt="product" className="slika_pl"/>
                        <p>{nameOfCompany} {products[i]}</p>
                        <button className="saznaj_vise_pl" > Saznajte vise </button> 
                    </div>
                    </Link>
                </button>);
        }
        return (
            <div className="company_middle">
                <div className="company_text"> <p> Neki tekst koji je namenjen da stoji za vile masine.
                    I koji opisuje ukratko o cemu se tu radi.
                    Navedeno za par masina...Neki tekst koji je namenjen da stoji za vile masine.
                    I koji opisuje ukratko o cemu se tu radi.
                    Navedeno za par masina...Neki tekst koji je namenjen da stoji za vile masine.
                    I koji opisuje ukratko o cemu se tu radi.
                    Navedeno za par masina...Neki tekst koji je namenjen da stoji za vile masine.
                    I koji opisuje ukratko o cemu se tu radi.
                    Navedeno za par masina... </p> 
                </div>
                {imagesArray}
            </div>
    );
    }
}

export default ProductList;