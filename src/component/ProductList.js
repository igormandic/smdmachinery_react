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
                <button key={i} className="btn_productList">
                    <Link style={{textDecoration: "none"}} key={i} to={pathToProduct}>
                    <div>
                        <img className="machine_logo_pl" src={pathToLogo} alt="machine_logo"/>
                        <img src={pahtToImage} alt="product" className="slika_pl"/>
                        <p className="nameOfProduct">{nameOfCompany} {products[i]}</p>
                        <div key={i} className="saznaj_vise_pl" > Saznajte vise </div> 
                    </div>
                    </Link>
                </button>);
        }
        return (
            <div className="company_middle">
                <div className="company_text"> 
                    <p> World Leader in Agile Urban Machines. <br/>
                        Wille is the most popular machine on the market for the environmental management and maintenance of urban areas. It is designed to operate through all four seasons, especially winter, when maintenance operations are the most demanding and expensive. The articulated steering and location of the cabin in the front frame provide the operator with excellent working conditions. 
                        Find the right Wille for your need. It is important to have a base machine, that fits to your needs perfectly. Wille family covers various areas of environment and property maintenance work.
                        Wille is exceptionally strong considering its size. The line-up comprises five models ranging from 2 to 7 tonnes. Compared with wheeled loaders in the same weight category, Wille's engine delivers about 60 % higher output. This power is mostly required to drive the hydraulic work attachments, and when carrying heavy loads on the road. Depending on the model, the travel speed is 36-50 kmph. 
                        In addition to weight and physical size the ability of the loader as well as the hydraulics play a crucial part when deciding the best machine for your use. Also Wille models upwards from 375 are equipped with powerful front loader as default, which widens the abilities of the machine. Especially during winter, when the maintenance work is most crucial and expensive, Wille's unparalleled efficiency shows.
                        One of Wille's strengths is its wide range of available work attachments. These are easy to procure and effortless to change. Their compatibility with the base unit is ideal, which means that the machine can be operated efficiently and safely all year round.
                        Wille's sales and after-sales operations are in reliable hands. Wille is a long-term investment with an exceptionally high second-hand value. Wille's high quality, capacity and productivity have helped it stay number one on the Nordic market for many years. 
                    </p> 
                </div>
                {imagesArray}
            </div>
    );
    }
}

export default ProductList;