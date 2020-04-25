import React, { Component } from 'react';
import '../css/TechnicalInfoAttachment.css'

class TechnicalInfoAttachment extends Component {
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
							<th>Specification</th>
						</tr></thead>
							{technicalInfo}
					</table>
        </div>
      );
    }
  }
  
  export default TechnicalInfoAttachment;