import React, { Component } from 'react';
import Header from './Header'
import RightSidebar from './RightSidebar'
import Footer from './Footer'
import NB from './NB';

class Company extends Component {
    render() {
        return (
            <div className="Company">
                <Header />
                <NB type={"product"} numOfElement={8}/>
                <RightSidebar video={"https://www.youtube.com/embed/tgbNymZ7vqY"} pdf={"/catalogs/masina1.pdf"}/>
                <Footer />
                <p>{this.props.location.about}</p>
            </div>
        );
    }
}

export default Company;