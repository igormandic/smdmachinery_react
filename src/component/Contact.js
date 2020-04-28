import React from "react";
import '../css/Contact.css';
import RightSidebar from './RightSidebar';

const Contact = () => {
  return (
    <div className="contact" >
      <iframe 
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2868.5733961904352!2d20.89962041550993!3d44.03020947911009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475726b4d66d62cf%3A0xd4592a2b4748839f!2z0JrRgNCw0ZnQuNGG0LUg0J3QsNGC0LDQu9C40ZjQtSA3Miwg0JrRgNCw0LPRg9GY0LXQstCw0YY!5e0!3m2!1ssr!2srs!4v1586692582023!5m2!1ssr!2srs"
              width="100%" 
              height="600px" 
              frameBorder="0" 
              allowFullScreen=""
              aria-hidden="false" 
              tabIndex="0"
              title="mapa"
        />
       <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contact us
      </h2>
      <div className="contactSection">
       <div className="span12">
            <div className="rowContact">
                <div className="span4 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Vaše ime" data-rule="minlen:4" data-msg="Molimo vas unesite najmanje 4 karaktera"></input>
                  <div className="validation"></div>
                </div>
                <div className="span4 form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Vaš Email" data-rule="email" data-msg="Molimo vas unesite ispravan email"></input>
                  <div className="validation"></div>
                </div>
                <div className="span4 form-group">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Naslov" data-rule="minlen:4" data-msg="Molimo vas unesite najmanje 8 karaktera"></input>
                  <div className="validation"></div>
                </div>
                <div className="span12 margintop10 form-group">
                  <textarea className="form-control" name="message" rows="12" data-rule="required" data-msg="Molimo vas napisite nesto" placeholder="Tekst"></textarea>
                  <div className="validation"></div>
                  <p className="text-center">
                  <RightSidebar />
                  </p>
                </div>
              </div>
          </div>
          </div>
      </div>
    
    
  );
}

export default Contact;