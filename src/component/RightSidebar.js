import React from 'react';
import '../css/RightSidebar.css';

class RightSidebar extends React.Component {
    downloadPdf(e) {
        e.preventDefault();
        window.open(this.props.pdf, '_blank');
    }
    
    render(){ 
        return (
            <div class="rightSidebar">
                <iframe width="200" height="150" src={this.props.video}> </iframe>
                <br></br>
                <button onClick={this.downloadPdf.bind(this)}>Download</button>
            </div>
        );
    }
}

export default RightSidebar;