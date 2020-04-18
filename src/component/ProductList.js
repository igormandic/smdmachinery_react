import React, { Component } from 'react';
import '../css/ProductList.css';

class ProductList extends Component {

    render() {

        return (
            <div className="product_middle">
                <div className="company_text"> <p> Neki tekst koji je namenjen da stoji za vile masine.
                    I koji opisuje ukratko o cemu se tu radi.
                    Navedeno za par masina...Neki tekst koji je namenjen da stoji za vile masine.
                    I koji opisuje ukratko o cemu se tu radi.
                    Navedeno za par masina...Neki tekst koji je namenjen da stoji za vile masine.
                    I koji opisuje ukratko o cemu se tu radi.
                    Navedeno za par masina...Neki tekst koji je namenjen da stoji za vile masine.
                    I koji opisuje ukratko o cemu se tu radi.
                    Navedeno za par masina... </p> </div>
                <div className="productList">
                            <button className="btn_productList">
                                <div>
                                    <img className="machine_logo_pl" src="/img/Wille/wille-logo.png" alt="machine_logo"/>
                                    <p>265</p>
                                    <img src="/WILLE/265/masina1.png" alt="product" className="slika_pl"/>
                                </div>
                            </button>
                            <button className="btn_productList">
                                <div>
                                    <img className="machine_logo_pl" src="/img/Wille/wille-logo.png" alt="machine_logo"/>
                                    <p>265</p>
                                    <img src="/WILLE/265/masina1.png" alt="product" className="slika_pl"/>
                                </div>
                            </button>
                            <button className="btn_productList">
                                <div>
                                    <img className="machine_logo_pl" src="/img/Wille/wille-logo.png" alt="machine_logo"/>
                                    <p>265</p>
                                    <img src="/WILLE/265/masina1.png" alt="product" className="slika_pl"/>
                                </div>
                            </button>
                            <button className="btn_productList">
                                <div>
                                    <img className="machine_logo_pl" src="/img/Wille/wille-logo.png" alt="machine_logo"/>
                                    <p>265</p>
                                    <img src="/WILLE/265/masina1.png" alt="product" className="slika_pl"/>
                                </div>
                            </button>
                            <button className="btn_productList">
                                <div>
                                    <img className="machine_logo_pl" src="/img/Wille/wille-logo.png" alt="machine_logo"/>
                                    <p>265</p>
                                    <img src="/WILLE/265/masina1.png" alt="product" className="slika_pl"/>
                                </div>
                            </button>
                </div>
            </div>
    );
    }
}

export default ProductList;