import React, { Component } from 'react';
import '../css/CompanyList.css';

class CompanyList extends Component {

    render() {
        return (
                <div id="companyList" className="companyList">
                    <div className="row1">
                        <button className="btn_companyList">
                            <img src="/WILLE/265/masina1.jpg" alt="Attachment" className="slika_cl"/>
                            <div className="middle">
                                <div className="learnMore"><a href="/#" className="productHref">Learn More</a></div>
                            </div>
                        </button>
                        <button className="btn_companyList">
                            <img src="/WILLE/375/masina1.jpg" alt="Attachment" className="slika_cl"/>
                            <div className="middle">
                                <div className="learnMore"><a href="/#" className="productHref">Learn More</a></div>
                            </div>
                        </button>
                    </div>
                    <div className="row1">
                        <button className="btn_companyList">
                            <img src="/WILLE/465/masina1.jpg" alt="Attachment" className="slika_cl"/>
                            <div className="middle">
                                <div className="learnMore"><a href="/#" className="productHref">Learn More</a></div>
                            </div>
                        </button>
                        <button className="btn_companyList">
                            <img src="/WILLE/665/masina1.jpg" alt="Attachment" className="slika_cl"/>
                            <div className="middle">
                                <div className="learnMore"><a href="/#" className="productHref">Learn More</a></div>
                            </div>
                        </button>
                    </div>
                    <div className="row1">
                        <button className="btn_companyList">
                            <img src="/WILLE/865/masina1.jpg" alt="Attachment" className="slika_cl"/>
                            <div className="middle">
                                <div className="learnMore"><a href="/#" className="productHref">Learn More</a></div>
                            </div>
                        </button>
                    </div>
          </div>
    );
    }
}

export default CompanyList;