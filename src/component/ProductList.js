import React, { Component } from 'react';
import '../css/ProductList.css';

class ProductList extends Component {

    render() {

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

                <button className="btn_productList">
                    <div>
                        <img className="machine_logo_pl" src="/Firme/wille/logo.png" alt="machine_logo"/>
                        <img src="/WILLE/265/masina3.jpg" alt="product" className="slika_pl"/>
                        <p>WILLE 265</p>
                        <button className="saznaj_vise_pl" > Saznajte vise </button> 
                    </div>
                </button>
                <button className="btn_productList">
                    <div>
                        <img className="machine_logo_pl" src="/Firme/wille/logo.png" alt="machine_logo"/>
                        <img src="/WILLE/265/masina3.jpg" alt="product" className="slika_pl"/>
                        <p>WILLE 265</p>
                        <button className="saznaj_vise_pl" > Saznajte vise </button> 
                    </div>
                </button>
                <button className="btn_productList">
                    <div>
                        <img className="machine_logo_pl" src="/Firme/wille/logo.png" alt="machine_logo"/>
                        <img src="/WILLE/265/masina3.jpg" alt="product" className="slika_pl"/>
                        <p>WILLE 265</p>
                        <button className="saznaj_vise_pl" > Saznajte vise </button> 
                    </div>
                </button>
                <button className="btn_productList">
                    <div>
                        <img className="machine_logo_pl" src="/Firme/wille/logo.png" alt="machine_logo"/>
                        <img src="/WILLE/265/masina3.jpg" alt="product" className="slika_pl"/>
                        <p>WILLE 265</p>
                        <button className="saznaj_vise_pl" > Saznajte vise </button> 
                    </div>
                </button>
                <button className="btn_productList">
                    <div>
                        <img className="machine_logo_pl" src="/Firme/wille/logo.png" alt="machine_logo"/>
                        <img src="/WILLE/265/masina3.jpg" alt="product" className="slika_pl"/>
                        <p>WILLE 265</p>
                        <button className="saznaj_vise_pl" > Saznajte vise </button> 
                    </div>
                </button>
            </div>
    );
    }
}

export default ProductList;