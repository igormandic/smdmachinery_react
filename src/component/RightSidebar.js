import React from 'react';
import '../css/RightSidebar.css';
import { __ } from '../utils/i18n';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class RightSidebar extends React.Component {
    downloadPdf(e) {
        e.preventDefault();
        window.open(this.props.pdf, '_blank');
    }
    
    render(){ 
        return (
            <div className="rightSidebar">
                <button className="dugme" onClick={this.downloadPdf.bind(this)}><FontAwesomeIcon icon={faEnvelope} color="black"/>  {__('Send message')}</button >
            </div>
        );
    }
}

export default RightSidebar;