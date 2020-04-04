import React, { Component } from 'react';
import '../css/TechnicalInfo.css'

class TechnicalInfo extends Component {
    render(){
      return (
        <div className="TechnicalInfo">
          <div className="specifikacije">
            <div className="levaStrana">
               <ul className="listaSpecifikacija">
                  <li className="linija">
                    <p>
                      <strong style={{fontSize: "20px", marginTop: "20px", fontWeight: "bold"}}>SPECIFIKACIJE</strong>
                    </p>
                    <div className="solidline"></div>
                  </li>
                  <li className="linija">
                    <div className="levaStranaTeksta"> 
                      <strong>Engine </strong>
                      <div className="desnaStranaTeksta">
                        CAT C2.2
                      </div>
                    </div>
                    <div className="solidline"></div>
                  </li>
                  <li className="linija">
                    <div className="levaStranaTeksta"> 
                      <strong>Output</strong>
                      <div className="desnaStranaTeksta">
                        36 kW / 48 hp
                      </div>
                    </div>
                    <div className="solidline"></div>
                  </li>
                  <li className="linija">
                    <div className="levaStranaTeksta" > 
                      <span className="dugacakTekst"><strong>Lifting force in upper/lower position</strong></span> 
                      <div className="desnaStranaTeksta" id="dugacakTekst">
                        <span> 12 / 13 kN , 2700 / 2920 lbf</span>
                      </div>
                    </div>
                    <div className="solidline"></div>
                  </li>
                  <li className="linija">
                    <div className="levaStranaTeksta"> 
                      <strong>Max motorhydraulic flow </strong>
                      <div className="desnaStranaTeksta">
                          {'54 + 36 l/min\n14.25 + 9.5 gpm\n 90 l/min\n 23.75 gpm\n'}
                      </div>
                      <div className="solidline" style={{marginTop: "15%"}}></div>
                    </div>
                  </li>
                  <li className="linija">
                    <div className="levaStranaTeksta"> 
                      <strong>Tyres </strong>
                      <div className="desnaStranaTeksta">
                        235/75-15 <br/>
                        31x10,5-15<span>       </span> <br/> 
                        31x15,5-15
                      </div>
                    </div>
                    <div className="solidline" style={{marginTop: "10%"}}></div>
                  </li>
                  <li className="linija">
                    <div className="levaStranaTeksta"> 
                      <strong>Width </strong>
                      <div className="desnaStranaTeksta">
                        1200/1300 mm , 47"/51"
                      </div>
                    </div>
                    <div className="solidline"></div>
                  </li>
                  <li className="linija">
                    <div className="levaStranaTeksta"> 
                      <strong>Length </strong>
                      <div className="desnaStranaTeksta">
                        3255 mm , 128"
                      </div>
                    </div>
                    <div className="solidline"></div>     
                  </li>
                  <li className="linija">
                    <div className="levaStranaTeksta"> 
                      <strong>Height </strong>
                      <div className="desnaStranaTeksta">
                        1990 mm , 78,5"
                      </div>
                    </div>
                    <div className="solidline"></div>
                  </li>
                  <li className="linija">
                    <div className="levaStranaTeksta"> 
                      <strong>Wheelbase </strong>
                      <div className="desnaStranaTeksta">
                        1490 mm , 58,5"
                      </div>
                    </div>
                    <div className="solidline"></div>
                  </li>
                  <li className="linija">
                    <div className="levaStranaTeksta"> 
                      <strong>Outer turning radius </strong>
                      <div className="desnaStranaTeksta">
                        3000 mm , 118"
                      </div>
                    </div>
                    <div className="solidline"></div>
                  </li>
                  <li className="linija">
                    <div className="levaStranaTeksta"> 
                      <strong>Weight </strong>
                      <div className="desnaStranaTeksta">
                        1900 kg , 4200 lbs
                      </div>
                    </div> 
                    <div className="solidline"></div>
                  </li>
                  <li className="linija">
                    <div className="levaStranaTeksta"> 
                      <strong>Driving speed </strong>
                      <div className="desnaStranaTeksta">
                        0-36 kmph , 22,5 mph
                      </div>
                    </div>
                    <div className="solidline"></div>
                  </li>
                  <li className="linija">
                    <div className="levaStranaTeksta"> 
                      <strong>Engine </strong>
                      <div className="desnaStranaTeksta">
                        CAT C2.2
                      </div>
                    </div>
                    <div className="solidline"></div>
                  </li>
                  <li className="linija">
                    <div className="levaStranaTeksta"> 
                      <strong>Engine </strong>
                      <div className="desnaStranaTeksta">
                        CAT C2.2
                      </div>
                    </div>
                    <div className="solidline"></div>
                  </li>
                </ul>
            </div>
            <div class="desnaStrana">
              <img src="/WILLE/265/265_measure_image_PNG.png" className="dimenzijeSpec" alt="WILLE 256"></img>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default TechnicalInfo;