import React, { Component } from 'react';
import Header1 from './Header1';
import Footer from './Footer';
import SelectMenuAttachment from './SelectMenuAttachment';
import '../css/Attachment.css';

class Attachment extends Component {
    componentWillMount() {
      if (this.props.match.params.attachment) {
          this.setState({name:this.props.match.params.attachment});
      }
      window.scrollTo(0, 0);
    }
    render(){
      const name = this.state.name;
      const nameOfCompany = window.localStorage.getItem("nameOfCompany");
      const pathToHeadImage = `/${nameOfCompany}/Prikljucci/${name}/head_image.jpg`;
      const alt = `${nameOfCompany} ${name}`;
      return (
          <div className="attachment">
            <Header1 type="company" name="Wille" />
            <img className="headImg" src={pathToHeadImage} alt={alt}></img>
            <SelectMenuAttachment name={name} nameOfCompany={nameOfCompany} />
            <Footer />
        </div>
      );
    }
  }
  
  export default Attachment;