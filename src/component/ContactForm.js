import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import '../css/ContactForm.css';

const ContactForm = () => {
return (
        <div className="FormContainer">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12">
                <form>
                  <div className="poruka">
                    <p className="naslov_cf">Posaljite nam poruku</p>
                    <input placeholder="Vase ime" type="text" id="defaultFormContactNameEx" className="form-control" />
                    <br />
                    <input placeholder="Vas email" type="email" id="defaultFormContactEmailEx" className="form-control" />
                    <br />
                    <input placeholder="Tema" type="text" id="defaultFormContactSubjectEx" className="form-control" />
                    <br />
                    <textarea placeholder="Poruka" type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />
                  </div>
                  <div className="text-center mt-4">
                      <MDBBtn color="dark" outline type="submit" className="mdbSend">
                        <span className="TextSend">Send</span> 
                      <MDBIcon far icon="paper-plane" className="ml-2" />
                      </MDBBtn>
                    </div>
                  </form>
                </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div> 
      );
    };

    export default ContactForm;