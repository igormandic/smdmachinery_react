import React, { Component } from 'react';
import RightSidebar from './RightSidebar'
import Footer from './Footer'
import Header1 from './Header1';
import Slideshow from './Slideshow';
// import CompanyList from './CompanyList';
import '../css/Company.css';

class Company extends Component {
    componentWillMount() {
        console.log(this.props.location);
        if(this.props.match.params.name) 
            this.setState({name:this.props.match.params.name});

    }
    render() {
        const name = this.state.name;
        const pathsToImages = [`/${name}/slider1.jpg`, `/${name}/slider2.jpg`, `/${name}/slider3.jpg`, `/${name}/slider4.jpg`];
        console.log(pathsToImages);
        return (
            <div className="company"> 
                <Header1 name={name} type="company"/>
                <Slideshow images={pathsToImages}/>
                {/* <ProductList products={["produkt1","produkt2","produkt3","produkt4"]} 
                             logo={"img/Wille/wille-logo.png"}
                             image={["/img/Wille/masina1.jpg","/img/Wille/masina2.jpg","/img/Wille/masina3.jpg","/img/Wille/masina4.jpg"]}
                             /> */}
                <RightSidebar pdf={"/catalogs/masina1.pdf"}/>
                <Footer />
            </div>
        );
    }
}

export default Company;