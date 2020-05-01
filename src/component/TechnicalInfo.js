import React, { Component } from 'react';
import '../css/TechnicalInfo.css';
import { __ } from '../utils/i18n';
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class TechnicalInfo extends Component {
    downloadPdf(e) {
        e.preventDefault();
        window.open(this.props.pdf, '_blank');
    }
    render(){
      const name = this.props.name;
      const nameOfCompany = this.props.nameOfCompany;
      const pathToMeasures = `/${nameOfCompany}/${name}/Measures.png`;
      const pathToMeasures2 = `/${nameOfCompany}/${name}/Measures.jpg`;
      const alt = `/${nameOfCompany} ${name}`
      const technicalInfo = this.props.technicalInfo;
      let tyres = [];
      let maxMotor = [];

      for (let i = 0; i<technicalInfo.tyres.length; i++) {
        tyres.push(<div key={i} className="field__item">{technicalInfo.tyres[i]}</div>);
      }

      for (let i = 0; i<technicalInfo.maxMotor.length; i++) {
        maxMotor.push(<div key={i} className="field__item">{technicalInfo.maxMotor[i]}</div>);
      }

      return (
        <div className="TechnicalInfo">
          <div className="content" role="contentinfo">
            <div className="contentInner">
              <div id="nothing" className="nothing">
                  <div className="node__content">
                      <h2 className="naslov">{__('Specification')}</h2>
                        <div className="columns">
                          <div className="left-column">
                            <div className="row" id="new" >
                              <div className="label">Engine</div>
                              <div className="spec">{technicalInfo.engine}</div>
                            </div>
                            <div className="row" id="new">
                              <div className="label">Output</div>
                              <div className="spec">{technicalInfo.output}</div>
                            </div>
                            <div className="row" id="new">
                              <div className="label">Lifting force in upper/lower position</div>
                              <div className="spec">{technicalInfo.liftingForce}</div>
                            </div>    
                            <div className="row" id="new">
                              <div className="label">Lifting height</div>
                              <div className="spec">{technicalInfo.liftingHeiht}</div>
                            </div> 
                            <div className="row" id="new">
                              <div className="label">Max motorhydraulic flow</div>
                              <div className="spec">
                                {maxMotor}
                              </div>
                            </div>       
                           <div className="row" id="new">
                            <div className="label">Tyres</div>
                            <div className="spec">
                             {tyres}
                            </div>
                          </div>       
                          <div className="row" id="new">
                            <div className="label">Width</div>
                            <div className="spec">{technicalInfo.width}</div>
                          </div>        
                          <div className="row" id="new">
                            <div className="label">Length</div>
                            <div className="spec">{technicalInfo.length}</div>
                          </div>   
                          <div className="row" id="new">
                            <div className="label">Height</div>
                            <div className="spec">{technicalInfo.height}</div>
                          </div>     
                          <div className="row" id="new">
                            <div className="label">Wheelbase</div>
                            <div className="spec">{technicalInfo.wheelbase}</div>
                          </div>       
                          <div className="row" id="new">
                            <div className="label">Outer turning radius</div>
                            <div className="spec">{technicalInfo.outerTurning}</div>
                          </div>     
                          <div className="row" id="new">
                            <div className="label">Weight</div>
                            <div className="spec">{technicalInfo.weight}</div>
                          </div>       
                           <div className="row" id="new"><div className="label">Driving speed</div>
                           <div className="spec">{technicalInfo.drivingSpeed}</div>
                          </div>  
                        </div>
                        <div className="right-column">
                          <div className="photoSpec1">
                           <img src={pathToMeasures} onError={(e)=>{e.target.src=pathToMeasures2}} className="photoMeasure" alt={alt}></img>
                          </div>
                            <button id="dugme" className="dugme" style={{border:"0"}}onClick={this.downloadPdf.bind(this)}> <FontAwesomeIcon icon={faDownload} color="black"/>  {__('download')}</button >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      );
    }
  }
  
  export default TechnicalInfo;