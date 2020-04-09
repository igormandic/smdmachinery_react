import React, { Component } from 'react';
import '../css/TechnicalInfo.css'

class TechnicalInfo extends Component {
    render(){
      return (
        <div className="TechnicalInfo">
          <div className="content" role="contentinfo">
            <div className="contentInner">
              <div id="nothing" className="nothing">
                <a name="specs"></a>
                  <div className="node__content">
                      <h2>Specifications</h2>
                        <div className="columns">
                          <div className="left-column">
                            <div className="row">
                              <div className="label">Engine</div>
                              <div className="spec">CAT C2.2</div>
                            </div>
                            <div className="row">
                              <div className="label">Output</div>
                              <div className="spec">36 kW / 48 hp</div>
                            </div>
                            <div className="row">
                              <div className="label">Lifting force in upper/lower position</div>
                              <div className="spec">12 / 13 kN , 2700 / 2920 lbf</div>
                            </div>    
                            <div className="row">
                              <div className="label">Lifting height</div>
                              <div className="spec">705 mm , 27.5"</div>
                            </div> 
                            <div className="row">
                              <div className="label">Max motorhydraulic flow</div>
                              <div className="spec">
                                <div className="field__item">54 + 36 l/min</div>
                                <div className="field__item">14.25 + 9.5 gpm</div>
                                <div className="field__item">90 l/min</div>
                                <div className="field__item">23.75 gpm</div>
                              </div>
                            </div>       
                           <div className="row">
                            <div className="label">Tyres</div>
                            <div className="spec">
                             <div className="field__item">235/75-15</div>
                             <div className="field__item">31x10,5-15</div>
                             <div className="field__item">31x15,5-15</div>
                            </div>
                          </div>       
                          <div className="row">
                            <div className="label">Width</div>
                            <div className="spec">1200/1300 mm , 47"/51"</div>
                          </div>        
                          <div className="row">
                            <div className="label">Length</div>
                            <div className="spec">3255 mm , 128"</div>
                          </div>   
                          <div className="row">
                            <div className="label">Height</div>
                            <div className="spec">1990 mm , 78,5"</div>
                          </div>     
                          <div className="row">
                            <div className="label">Wheelbase</div>
                            <div className="spec">1490 mm , 58,5"</div>
                          </div>       
                          <div className="row">
                            <div className="label">Outer turning radius</div>
                            <div className="spec">3000 mm , 118"</div>
                          </div>     
                          <div className="row">
                            <div className="label">Weight</div>
                            <div className="spec">1900 kg , 4200 lbs</div>
                          </div>       
                           <div className="row"><div className="label">Driving speed</div>
                           <div className="spec">0-36 kmph , 22,5 mph</div>
                          </div>  
                        </div>
                        <div className="right-column">
                          <div className="photoSpec">
                           <img src="/WILLE/265/265_measure_image_PNG.png" className="photoMeasure" alt="WILLE 256"></img>
                          </div>
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

  
    
  