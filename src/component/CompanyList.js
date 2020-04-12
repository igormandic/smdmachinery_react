import React, { Component } from 'react';
import '../css/CompanyList.css';

class CompanyList extends Component {

    render() {
        return (
                <div className="companyList">
                    <div className="row1">
                        <button className="btn_companyList">
                            <img src="/slika.jpeg" alt="Attachment" className="slika_cl"/>
                        </button>
                        <button className="btn_companyList">
                            <img src="/slika.jpeg" alt="Attachment" className="slika_cl"/>
                        </button>
                    </div>
                    <div className="row1">
                        <button className="btn_companyList">
                            <img src="/slika.jpeg" alt="Attachment" className="slika_cl"/>
                        </button>
                        <button className="btn_companyList">
                            <img src="/slika.jpeg" alt="Attachment" className="slika_cl"/>
                        </button>
                    </div>
                </div>
    );
    }
}

export default CompanyList;