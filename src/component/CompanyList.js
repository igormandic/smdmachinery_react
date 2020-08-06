import React, { Component } from 'react';
import '../css/CompanyList.css';
import { Link } from 'react-router-dom';
// import { __ } from '../utils/i18n';

class CompanyList extends Component {

    render() {
        return (
            <div className="homepage_middle" id="companyList">
                <div className="homepage_text"> 
                    {/* <p> {__('HomePage text')}</p>  */}
                </div>

                <div className="kompanija_homepage">
                    <div className="row_cl1">
                            <div className="one_company">
                                <button className="btn_companyList"> 
                                    <Link to="/company/Wille" >
                                        <img className="img_companyList" src="/Firme/Wille/Wille.jpg" alt="company"/>
                                    </Link>
                                </button>
                            </div>
                            <div className="one_company">
                                <button className="btn_companyList" > 
                                    <Link to="/company/Broddson">
                                        <img className="img_companyList" src="/Firme/broddson/Broddson.jpg" alt="company"/>
                                    </Link>
                                </button>
                            </div>
                            {/* <div className="one_company">
                                <button className="btn_companyList" > 
                                    <Link to="/">
                                        <img className="img_companyList" src="/Euromacchine.jpg" alt="company"/>
                                    </Link>
                                </button>
                            </div> */}
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