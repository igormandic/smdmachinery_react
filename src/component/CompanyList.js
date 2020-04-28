import React, { Component } from 'react';
import '../css/CompanyList.css';
import { Link } from 'react-router-dom';

class CompanyList extends Component {

    render() {
        return (
            <div className="homepage_middle" id="companyList">
                <div className="homepage_text"> <p> Neki tekst koji je namenjen da stoji za vile masine.
                    I koji opisuje ukratko o cemu se tu radi.
                    Navedeno za par masina...Neki tekst koji je namenjen da stoji za vile masine.
                    I koji opisuje ukratko o cemu se tu radi.
                    Navedeno za par masina...Neki tekst koji je namenjen da stoji za vile masine.
                    I koji opisuje ukratko o cemu se tu radi.
                    Navedeno za par masina...Neki tekst koji je namenjen da stoji za vile masine.
                    I koji opisuje ukratko o cemu se tu radi.
                    Navedeno za par masina... </p> 
                </div>

                <div className="kompanija_homepage">
                    <div className="row_cl1">
                            <div className="one_company">
                                <button className="btn_companyList"> 
                                    <Link to="/company/WILLE" >
                                        <img className="img_companyList" src="/Firme/wille/Wille.jpg" alt="company"/>
                                    </Link>
                                </button>
                            </div>
                            <div className="one_company">
                                <button className="btn_companyList" > 
                                    <Link to="/company/Broddson">
                                        <img className="img_companyList" src="/Firme/broddson/Broddson.jpg" alt="company"/>
                                    </Link>>
                                </button>
                            </div>
                    </div>
                    <div className="row_cl2">
                            <div className="one_company">
                                <button className="btn_companyList" > 
                                    <a href="https://www.boschung.com/" >
                                        <img className="img_companyList" src="/Firme/boschung/Boschung.jpg" alt="company"/>
                                    </a>
                                </button>
                            </div>
                            <div className="one_company">
                                <button className="btn_companyList" > 
                                    <img className="img_companyList" src="/Firme/dorotea mekaniska/Dorotea.jpg" alt="company"/>
                                </button>
                            </div>
                    </div>

                </div>
            </div>
    );
    }
}

export default CompanyList;