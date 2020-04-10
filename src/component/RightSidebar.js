import React from 'react';
import '../css/RightSidebar.css';
import ContactForm from './ContactForm';

class RightSidebar extends React.Component {
    downloadPdf(e) {
        e.preventDefault();
        window.open(this.props.pdf, '_blank');
    }
    
    render(){ 
        return (
            <div className="rightSidebar">
                <iframe title="video" width="270" height="200" src={this.props.video}> </iframe>
                <br></br>
                <button onClick={this.downloadPdf.bind(this)}>Download</button>
                <ContactForm />
            </div>
        );
    }
}

export default RightSidebar;