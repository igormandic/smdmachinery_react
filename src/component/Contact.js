import React from "react";
import '../css/Contact.css';
import '../css/RightSidebar.css';
import { __ } from '../utils/i18n';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
const API_PATH = 'C:\Users\Lenovo\Desktop\smdmachinery_react\src\api\contact\index.php';
  


  class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        mailSent: false,
        error: null
      }
    }
    handleFormSubmit = e => {
      e.preventDefault();
      axios({
        method: 'post',
        url: `${API_PATH}`,
        headers: { 'content-type': 'application/json' },
        data: this.state
      })
        .then(result => {
          this.setState({
            mailSent: result.data.sent
          })
        })
        .catch(error => this.setState({ error: error.message }));
    };

  render(){
    
  return (
    <div className="contact" >
      <iframe 
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.637902603797!2d20.459037815181272!3d44.808567579098614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa8da54c451%3A0xe5643e65a4de8733!2zS9GA0LDRmdC40YbQtSDQndCw0YLQsNC70LjRmNC1IDcyLCDQkdC10L7Qs9GA0LDQtCAxMTAwMA!5e0!3m2!1ssr!2srs!4v1588703295361!5m2!1ssr!2srs"
              width="100%" 
              height="600px" 
              frameBorder="0" 
              allowFullScreen=""
              aria-hidden="false" 
              tabIndex="0"
              title="mapa"
        />
        <div className ="locationDiv">
        <span className="location">SMD Machinery d.o.o </span>
        <span className="location"><img className="location-logo" src="/location-logo.png" alt=""/>Kraljice Natalije 72 </span>
        <span className="location"> 11000 Beograd, Srbija </span>
        <span className="location"><img className="mail_logo" src="/mail_logo.png" alt="mail_logo"/>office@smdmachinery.rs </span>
        <span className="location"> <img className="phone_logo" src="/phone_logo.png" alt="phone_logo"/>+381 11 3612 162 </span>
        <span className="location"> PIB: 100395882 </span>
        <span className="location"> MB: 07809697 </span>
        </div>
       <h2 className="h1-responsive font-weight-bold text-center my-5">
        {__('ContactUs')}
      </h2>
      <form action="#">
      <div className="contactSection">
       <div className="span12">
            <div className="rowContact">
                <div className="span4 form-group">
                  <input id="name" type="text" name="name" className="form-control" placeholder={__('YourName')} data-rule="minlen:4" data-msg="Molimo vas unesite najmanje 4 karaktera" value={this.state.fname} onChange={e => this.setState({ name: e.target.value })}></input>
                  <div className="validation"></div>
                </div>
                <div className="span4 form-group">
                  <input id="email" type="email" className="form-control" name="email"  placeholder={__('YourMail')} data-rule="email" data-msg="Molimo vas unesite ispravan email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })}></input>
                  <div className="validation"></div>
                </div>
                <div className="span4 form-group">
                  <input id="subject" type="text" className="form-control" name="subject" id="subject" placeholder={__('MailTitle')} data-rule="minlen:4" data-msg="Molimo vas unesite najmanje 8 karaktera" value={this.state.subject} onChange={e => this.setState({ subject: e.target.value })}></input>
                  <div className="validation"></div>
                </div>
                <div className="span12 margintop10 form-group">
                  <textarea id="message" className="form-control" name="message" rows="12" data-rule="required" data-msg={__('PorukaMail')} placeholder="Text" onChange={e => this.setState({ message: e.target.value })} value={this.state.message}></textarea>
                  <div className="validation"></div>
                    <div className="rightSidebar">
                      <button className="dugme" type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit"><FontAwesomeIcon icon={faEnvelope} color="black"/>  {__('Send message')}</button >
                  </div>
                </div>
              </div>
          </div>
          </div>
            <div>
              {this.state.mailSent &&
              <div>Thank you for contcting us.</div>
              }
            </div>
          </form>
      </div>
    
    
  );
}
}


export default Contact;