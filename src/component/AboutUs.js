import React from 'react';
import Header1 from './Header1';
import Footer from './Footer';
import '../css/AboutUs.css'; 
import { __ } from '../utils/i18n';

class AboutUs extends React.Component {

  render() {
    // let title = [];
    // let text = [];
    return (
      <div className="">
        <Header1 type="home"/>
            <div className="aboutUs">
                <img src="/logo.png" alt="SMDMachinery" id="logoAboutUs"/>
                <h4 className="aboutUsTitle" ><span id="blueLetter">{__('AboutUs Title 1')}</span>{__('AboutUs Title 2')}<span id="redLetter">{__('AboutUs Title 3')}</span>{__('AboutUs Title 4')}</h4>
                    <p className="aboutUsParagraph">{__('AboutUs Text 1')}</p>
                    <p className="aboutUsParagraph">{__('AboutUs Text 2')}</p>
                    <p className="aboutUsParagraph">{__('AboutUs Text 3')}</p>
                    <p className="aboutUsParagraph"><strong>{__('AboutUs Text 4')}</strong></p>
                    <p className="aboutUsParagraph">{__('AboutUs Text 5')} <strong>{__('AboutUs Text 6')} </strong> {__('AboutUs Text 7')}</p>
                <h4 className="aboutUsTitle">{__('AboutUs Title 5')}</h4>
                    <p>{__('AboutUs Text 8')} <strong>{__('AboutUs Text 9')}</strong></p>
                    <p>{__('AboutUs Text 10')}</p>
                    <p>{__('AboutUs Text 11')}</p>
                    <p>{__('AboutUs Text 12')}</p>
                <h4 className="aboutUsTitle">{__('AboutUs Title 6')}</h4>
                    <p>{__('AboutUs Text 13')}</p>
                    <p>{__('AboutUs Text 14')}</p>
                    <p>{__('AboutUs Text 15')}</p>
                    <p>{__('AboutUs Text 16')}</p>
                <h4 className="aboutUsTitle">{__('AboutUs Title 7')}</h4>
                    <p>{__('AboutUs Text 17')}</p>
                    <p>{__('AboutUs Text 18')}</p>
                    <p>{__('AboutUs Text 19')}</p>
                    <p>{__('AboutUs Text 20')}</p>
                    <p>{__('AboutUs Text 21')}</p>
                <h4 className="aboutUsTitle">{__('AboutUs Title 8')}</h4>
                    <p>{__('AboutUs Text 22')}</p>
                    <p>{__('AboutUs Text 23')}<strong>{__('AboutUs Text 24')}</strong></p>
                    <p>{__('AboutUs Text 25')}<strong>{__('AboutUs Text 26')} </strong></p>
                <h4 className="aboutUsTitle">{__('AboutUs Title 9')}</h4>
                    <p>{__('AboutUs Text 27')}</p>
                    <p>{__('AboutUs Text 28')}</p>
                    <p><strong>{__('AboutUs Text 29')}</strong>{__('AboutUs Text 30')}<strong>{__('AboutUs Text 31')}</strong></p>
                <h4 className="aboutUsTitle">{__('AboutUs Title 10')}</h4>
                <h4 className="aboutUsTitle" id="last"><span id="blueLetter">{__('AboutUs Title 11')}</span>{__('AboutUs Title 12')} <span id="redLetter">{__('AboutUs Title 13')}</span>{__('AboutUs Title 14')}</h4>
            </div>
        <Footer/>  
      </div>
      );
  }

}

export default AboutUs;