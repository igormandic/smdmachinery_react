import React, { Component } from 'react';
import RightSidebar from './RightSidebar'
import Footer from './Footer'
import Header1 from './Header1';
import Slideshow from './Slideshow';
import ProductList from './ProductList';
import '../css/Company.css';
import ReturnToTop from './ReturnToTop';

class Company extends Component {
    componentWillMount() {
        if (this.props.match.params.name) { 
            this.setState({name:this.props.match.params.name});
            window.localStorage.setItem("nameOfCompany", this.props.match.params.name);
        }

    }
    render() {
        const name = this.state.name;
        const pathsToImages = [`/${name}/slider1.jpg`, `/${name}/slider2.jpg`, `/${name}/slider3.jpg`, `/${name}/slider4.jpg`];
        return (
            <div className="company"> 
                <Header1 name={name} type="company"/>
                <Slideshow images={pathsToImages}/>
                <ProductList />
                <video style={{width: "81.8%", marginLeft: "9.1%"}} src="/WILLE/video.mp4" type="video/mp4" controls autoPlay muted loop/>
                <RightSidebar pdf={"/catalogs/masina1.pdf"}/>
                <Footer />
                <ReturnToTop />
            </div>
        );
    }
}

export default Company;