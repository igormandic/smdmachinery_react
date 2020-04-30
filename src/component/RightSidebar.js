import React from 'react';
import '../css/RightSidebar.css';
import { __ } from '../utils/i18n';

class RightSidebar extends React.Component {
    downloadPdf(e) {
        e.preventDefault();
        window.open(this.props.pdf, '_blank');
    }
    
    render(){ 
        return (
            <div className="rightSidebar">
                <button className="dugme" onClick={this.downloadPdf.bind(this)}>{__('Send message')}</button >
            </div>
        );
    }
}

export default RightSidebar;