import React, { Component } from 'react';
import '../css/TechnicalInfoAttachment.css';
import { __ } from '../utils/i18n';
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TechnicalInfoAttachment extends Component {
	downloadPdf(e) {
        e.preventDefault();
        window.open(this.props.pdf, '_blank');
    }
    render(){
	  	const technicalInfoAttachment = this.props.technicalInfoAttachment;
	  	let technicalInfo = [];
	  	for (let i = 0; i<technicalInfoAttachment.length; i++) {
				let row = technicalInfoAttachment[i];
				let rowInfo = [];
					for (let j = 1; j<row.length; j++) {
						if (i === 0 && row[0] === '')
							rowInfo.push(<td key={j}><strong>{row[j]}</strong></td>);
						else {
							rowInfo.push(<td key={j}>{row[j]}</td>);
						}
					}
				rowInfo = [<tr key={i}><td><strong>{row[0]}</strong></td>{rowInfo}</tr>];
				technicalInfo.push(rowInfo);
	  	}
	  	technicalInfo = [<tbody key={"key"}>{technicalInfo}</tbody>];
      return (
        <div className="attachmentTable">
          <table className="responsive-table stacktable large-only">
				<thead><tr>
					<th>{__('Specification')}</th>
				</tr></thead>
				{technicalInfo}
			</table>
			{this.props.pdf !== "" ? <button id="dugme" className="dugme" style={{border:"0", width:"30%", marginTop:"0%", marginLeft:"35%"}}onClick={this.downloadPdf.bind(this)}> <FontAwesomeIcon icon={faDownload} color="black"/>  {__('download')}</button > : ""}
        </div>
      );
    }
  }
  
  export default TechnicalInfoAttachment;