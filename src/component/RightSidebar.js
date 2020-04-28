import React from 'react';
import '../css/RightSidebar.css';

class RightSidebar extends React.Component {
    downloadPdf(e) {
        e.preventDefault();
        window.open(this.props.pdf, '_blank');
    }
    
    render(){ 
        return (
            <div className="rightSidebar">
                <button className="dugme" onClick={this.downloadPdf.bind(this)}>Posaljite poruku</button >
            </div>
        );
    }
}

export default RightSidebar;