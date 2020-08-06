import React, { Component } from 'react';
import Footer from './Footer'
import Header1 from './Header1';
import Slideshow from './Slideshow';
import ProductList from './ProductList';
import '../css/Company.css';
import ReturnToTop from './ReturnToTop';
import ReactPlayer from "react-player";

class Company extends Component {
    UNSAFE_componentWillMount() {
        if (this.props.match.params.name) { 
            this.setState({name:this.props.match.params.name});
            window.localStorage.setItem("nameOfCompany", this.props.match.params.name);
        }
        window.scrollTo(0, 0);
    }
    
    render() {
        const name = this.state.name;
        const pathsToImages = [`/${name}/slider1.jpg`, `/${name}/slider2.jpg`, `/${name}/slider3.jpg`, `/${name}/slider4.jpg`];
        let url = "";
        if (name === "Wille") {
            url = "https://www.youtube.com/embed/pRubXTS_pv0?showinfo=0&enablejsapi=1&origin=http://localhost:3000/company/Wille";
        } else if (name === "Broddson") {
            url = "https://www.youtube.com/embed/GNKYHNI2mZY?showinfo=0&enablejsapi=1&origin=http://localhost:3000/company/Broddson";
        }
        return (
            <div className="company"> 
                <Header1 name={name} type="company"/>
                <Slideshow images={pathsToImages}/>
                <ProductList />
                <div style={{marginLeft: "9.11%", width:"81.5%", paddingBottom:"5%"}}>
                    <ReactPlayer 
                        url={url}
                        playing={true}
                        muted={true}
                        loop={true}
                        width="100%"
                        height={"86vh"}
                        controls={true}
                    />
                </div>
                <Footer />
                <ReturnToTop />
            </div>
        );
    }
}

export default Company;