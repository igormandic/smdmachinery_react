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
                {/* <iframe title="video" width="200" height="150" src={this.props.video}> </iframe> */}
                <button className="dugme" onClick={this.downloadPdf.bind(this)}>Preuzmite brosuru</button >
            </div>
        );
    }
}

export default RightSidebar;