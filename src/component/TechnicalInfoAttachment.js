import React, { Component } from 'react';
import '../css/TechnicalInfoAttachment.css'

class TechnicalInfoAttachment extends Component {
    render(){
      return (
        <div className="attachmentTable">
          <table className="responsive-table stacktable large-only"><thead><tr>
			<th>Specification</th>
			</tr></thead><tbody><tr><td><strong>Working height (mm)</strong></td>
			<td>8800</td>
			</tr><tr><td><strong>Platform floor from the ground (mm)</strong></td>
			<td>6800</td>
			</tr><tr><td><strong>Outreach to the side (mm)</strong></td>
			<td>5700</td>
			</tr><tr><td><strong>Swing angle of the boom (degrees)</strong></td>
			<td>±70º</td>
			</tr><tr><td><strong>Platform load (kg)</strong></td>
			<td>120 (1 person + 40)</td>
			</tr><tr><td><strong>Platform dimensions (mm)</strong></td>
			<td>820 x 740</td>
			</tr><tr><td><strong>Weight (kg)</strong></td>
			<td>720</td>
			</tr><tr><td><strong>Compatibility</strong></td>
			<td>365, 465, 665, 865 (*</td>
		</tr></tbody></table>
        </div>
      );
    }
  }
  
  export default TechnicalInfoAttachment;