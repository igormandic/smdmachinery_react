import React, { Component } from 'react';
import '../css/ProductsSpecs.css';

class ProductsSpecs extends Component {
    render(){
        let products = ["265", "375", "465", "665", "865"];
        let pathToProducts = [];
        for (let i = 0; i<products.length; i++) {
          pathToProducts.push(`${this.props.path}/${products[i]}`);
        }
      
        
        return (
            <div className="ProductsSpecs">
                <div className="region-content-top">
                    <div className="views-element-container block block-views block-views-blockmachines-section" id="block-views-block-machines-section">
                        <h1>Machines</h1>
                            <div>
                                <div className="view view-machines view-id-machines view-display-id-section js-view-dom-id-fe1537664dc9d2986eb678d6ba9fa1d05b0e1514a7dbc70c265f2c4e46b72f29">
                                    <div className="view-content">
                                        <table className="cols-5">
                                            <thead>
                                                <tr>
                                                    <th className="views-field views-field-field_machine_image" scope="row">
                                                    </th>
                                                    <th className="views-field views-field-field-machine-image">
                                                        <a style={{textDecoration: "none"}} href={pathToProducts[0]}>
                                                            <article className="media media--type-image media--view-mode-menu-image">
                                                                <div className="field field--name-field-image-file field--type-image field--label-hidden field__item">    
                                                                    <img src="/Wille/265/masina1.png" alt="Wille 265" typeof="Image"></img>
                                                                </div>
                                                            </article>
                                                            <span>265</span></a></th>
                                                                <th className="views-field views-field-field-machine-image">
                                                                    <a style={{textDecoration: "none"}} href={pathToProducts[1]}>
                                                                        <article className="media media--type-image media--view-mode-menu-image">
                                                                            <div className="field field--name-field-image-file field--type-image field--label-hidden field__item">    
                                                                                <img src="/Wille/375/375_pose_thumb.png" alt="Wille 375 thumb" typeof="Image"></img>
                                                                            </div>
                                                                        </article>
                                                            <span>375</span></a></th>
                                                                <th className="views-field views-field-field-machine-image">
                                                                    <a style={{textDecoration: "none"}} href={pathToProducts[2]}>
                                                                        <article className="media media--type-image media--view-mode-menu-image">
                                                                            <div className="field field--name-field-image-file field--type-image field--label-hidden field__item">    
                                                                                <img src="/Wille/465/465_pose_thumb.png" alt="Wille 465" typeof="Image"></img>
                                                                            </div>
                                                                        </article>
                                                            <span>465</span></a></th>
                                                                <th className="views-field views-field-field-machine-image">
                                                                    <a style={{textDecoration: "none"}} href={pathToProducts[3]}>
                                                                        <article className="media media--type-image media--view-mode-menu-image">
                                                                            <div className="field field--name-field-image-file field--type-image field--label-hidden field__item">    
                                                                                <img src="/Wille/665/665iv_pose_thumb_v2.png" alt="Wille 665 stage 4 thumbnail" typeof="Image" />
                                                                            </div>
                                                                        </article>
                                                            <span>665</span></a></th>
                                                                <th className="views-field views-field-field-machine-image">
                                                                    <a style={{textDecoration: "none"}} href={pathToProducts[4]}>
                                                                        <article className="media media--type-image media--view-mode-menu-image">
                                                                            <div className="field field--name-field-image-file field--type-image field--label-hidden field__item">    
                                                                                <img src="/Wille/865/865iv_pose_thumb.png" alt="Wille 865 stage 4" typeof="Image"></img>
                                                                            </div>
                                                                        </article>
                                                            <span>865</span> 
                                                        </a>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th id="view-field-engine-table-column" className="views-field views-field-field_engine" scope="row">Engine</th>
                                                    <td headers="view-field-engine-table-column" className="views-field">
                                                        CAT C2.2
                                                    </td>
                                                    <td headers="view-field-engine-table-column" className="views-field">
                                                        Kohler KDI 1903TCR
                                                    </td>
                                                    <td headers="view-field-engine-table-column" className="views-field">
                                                        Kohler KDI 2504 TCR
                                                    </td>
                                                    <td headers="view-field-engine-table-column" className="views-field">
                                                        Kohler KDI 3404 TCR-SCR
                                                    </td>
                                                    <td headers="view-field-engine-table-column" className="views-field">
                                                        Kohler KDI 3404 TCR-SCR
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th id="view-field-output-table-column" className="views-field views-field-field_output" scope="row">Output</th>
                                                    <td headers="view-field-output-table-column" className="views-field">
                                                        36 kW / 48 hp
                                                    </td>
                                                    <td headers="view-field-output-table-column" className="views-field">
                                                        42 kW / 56 hp
                                                    </td>
                                                    <td headers="view-field-output-table-column" className="views-field">
                                                        55,4 kW / 74,3 hp
                                                    </td>
                                                    <td headers="view-field-output-table-column" className="views-field">
                                                        100 kW / 136 hp
                                                    </td>
                                                    <td headers="view-field-output-table-column" className="views-field">
                                                        100 kW / 136 hp
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th id="view-field-lifting-force-table-column" className="views-field views-field-field_lifting_force" scope="row">Lifting force in upper/lower position</th>
                                                    <td headers="view-field-lifting-force-table-column" className="views-field">
                                                        12 / 13 kN , 2700 / 2920 lbf
                                                    </td>
                                                    <td headers="view-field-lifting-force-table-column" className="views-field">
                                                        7,4 / 17,7 kN
                                                    </td>
                                                    <td headers="view-field-lifting-force-table-column" className="views-field">
                                                        11.6 / 24.7 kN , 2610 / 5550 lbf
                                                    </td>
                                                    <td headers="view-field-lifting-force-table-column" className="views-field">
                                                        30.2 / 41 kN, 6790 / 9220 lbf
                                                    </td>
                                                    <td headers="view-field-lifting-force-table-column" className="views-field">
                                                        42.5 / 65.8 kN , 9550 / 14800 lbf
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th id="view-field-lifting-height-table-column" className="views-field views-field-field_lifting_height" scope="row">Lifting height</th>
                                                    <td headers="view-field-lifting-height-table-column" className="views-field">
                                                        705 mm , 27.5"
                                                    </td>
                                                    <td headers="view-field-lifting-height-table-column" className="views-field">
                                                        2735 mm , 107.8"
                                                    </td>
                                                    <td headers="view-field-lifting-height-table-column" className="views-field">
                                                        2800 mm, 110"
                                                    </td>
                                                    <td headers="view-field-lifting-height-table-column" className="views-field">
                                                        3380 mm, 133"
                                                    </td>
                                                    <td headers="view-field-lifting-height-table-column" className="views-field">
                                                        3740 mm , 147"
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th id="view-field-max-motorhydraulic-flow-table-column" className="views-field views-field-field_max_motorhydraulic_flow" scope="row">Max motorhydraulic flow</th>
                                                    <td headers="view-field-max-motorhydraulic-flow-table-column" className="views-field">
                                                        54 + 36 l/min, 14.25 + 9.5 gpm, 90 l/min, 23.75 gpm
                                                    </td>
                                                    <td headers="view-field-max-motorhydraulic-flow-table-column" className="views-field">
                                                        0-55 + 35 + 20  l/min, 14.25 + 9.5 gpm, 110 l/min, 23.75 gpm
                                                    </td>
                                                    <td headers="view-field-max-motorhydraulic-flow-table-column" className="views-field">
                                                        0-80 + 52 l/min, 0-21.2 + 13.7 gpm, 132 l/min, 34.9 gpm
                                                    </td>
                                                    <td headers="view-field-max-motorhydraulic-flow-table-column" className="views-field">
                                                        0-145 + 55 l/min , 0-38.3 + 14.5 gpm, 200 l/min, 52.8 gpm
                                                    </td>
                                                    <td headers="view-field-max-motorhydraulic-flow-table-column" className="views-field">
                                                        0-145 + 55 l/min ,  0-38.3 + 14.5 gpm, 200 l/min, 52.8 gpm
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th id="view-field-tyres-table-column" className="views-field views-field-field_tyres" scope="row">Tyres</th>
                                                    <td headers="view-field-tyres-table-column" className="views-field">
                                                        <div className="item-list"><ul><li>235/75-15</li><li>31x10,5-15</li><li>31x15,5-15</li></ul></div>
                                                    </td>
                                                    <td headers="view-field-tyres-table-column" className="views-field">
                                                        <div className="item-list"><ul><li>31x15,5-15</li></ul></div>
                                                    </td>
                                                    <td headers="view-field-tyres-table-column" className="views-field">
                                                        <div className="item-list"><ul><li>305/70R16</li><li>380/60R15 </li></ul></div>
                                                    </td>
                                                    <td headers="view-field-tyres-table-column" className="views-field">
                                                        <div className="item-list"><ul><li>420/65R24</li><li>360/80R20</li></ul></div>
                                                    </td>
                                                    <td headers="view-field-tyres-table-column" className="views-field">
                                                        <div className="item-list"><ul><li>460/65R24</li><li>500/60R22,5</li></ul></div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th id="view-field-width-table-column" className="views-field views-field-field_width" scope="row">Width</th>
                                                    <td headers="view-field-width-table-column" className="views-field">
                                                        1200/1300 mm , 47"/51"
                                                    </td>
                                                    <td headers="view-field-width-table-column" className="views-field">
                                                        1430 mm , 56"
                                                    </td>
                                                    <td headers="view-field-width-table-column" className="views-field">
                                                        1655 mm, 65"
                                                    </td>
                                                    <td headers="view-field-width-table-column" className="views-field">
                                                        1750 / 1920 mm, 69"/76"
                                                    </td>
                                                    <td headers="view-field-width-table-column" className="views-field">
                                                        2150 mm , 85"
                                                    </td>
                                                    </tr>
                                                    <tr>
                                                        <th id="view-field-length-table-column" className="views-field views-field-field_length" scope="row">Length</th>
                                                        <td headers="view-field-length-table-column" className="views-field">
                                                            3255 mm , 128"
                                                        </td>
                                                        <td headers="view-field-length-table-column" className="views-field">
                                                            4135 mm , 162.8"
                                                        </td>
                                                        <td headers="view-field-length-table-column" className="views-field">
                                                            4270 mm, 168"
                                                        </td>
                                                        <td headers="view-field-length-table-column" className="views-field">
                                                            5115 mm, 201"
                                                        </td>
                                                        <td headers="view-field-length-table-column" className="views-field">
                                                            5480 mm , 216"
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th id="view-field-height-table-column" className="views-field views-field-field_height" scope="row">Height</th>
                                                        <td headers="view-field-height-table-column" className="views-field">
                                                            1990 mm , 78,5"
                                                        </td>
                                                        <td headers="view-field-height-table-column" className="views-field">
                                                            2090 mm , 82"
                                                        </td>
                                                        <td headers="view-field-height-table-column" className="views-field">
                                                            2175 mm, 85.5"
                                                        </td>
                                                        <td headers="view-field-height-table-column" className="views-field">
                                                            2340 mm, 92"
                                                        </td>
                                                        <td headers="view-field-height-table-column" className="views-field">
                                                            2490 mm , 98"
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th id="view-field-wheelbase-table-column" className="views-field views-field-field_wheelbase" scope="row">Wheelbase</th>
                                                        <td headers="view-field-wheelbase-table-column" className="views-field">
                                                            1490 mm , 58,5"
                                                        </td>
                                                        <td headers="view-field-wheelbase-table-column" className="views-field">
                                                            1955 mm , 77"
                                                        </td>
                                                        <td headers="view-field-wheelbase-table-column" className="views-field">
                                                            2090 mm, 82"
                                                        </td>
                                                        <td headers="view-field-wheelbase-table-column" className="views-field">
                                                            2415 mm, 95"
                                                        </td>
                                                        <td headers="view-field-wheelbase-table-column" className="views-field">
                                                            2675 mm , 105,5"
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th id="view-field-outer-turning-radius-table-column" className="views-field views-field-field_outer_turning_radius" scope="row">Outer turning radius</th>
                                                        <td headers="view-field-outer-turning-radius-table-column" className="views-field">
                                                            3000 mm , 118"
                                                        </td>
                                                        <td headers="view-field-outer-turning-radius-table-column" className="views-field">
                                                            3570 mm , 140.5" 
                                                        </td>
                                                        <td headers="view-field-outer-turning-radius-table-column" className="views-field">
                                                            3750 mm, 147.5"
                                                        </td>
                                                        <td headers="view-field-outer-turning-radius-table-column" className="views-field">
                                                            4340 mm, 171"
                                                        </td>
                                                        <td headers="view-field-outer-turning-radius-table-column" className="views-field">
                                                            4800 mm , 189"
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th id="view-field-weight-table-column" className="views-field views-field-field_weight" scope="row">Weight</th>
                                                        <td headers="view-field-weight-table-column" className="views-field">
                                                            1900 kg , 4200 lbs
                                                        </td>
                                                        <td headers="view-field-weight-table-column" className="views-field">
                                                            2920 kg , 6437 lbs
                                                        </td>
                                                        <td headers="view-field-weight-table-column" className="views-field">
                                                            3420 kg, 7500 lbs
                                                        </td>
                                                        <td headers="view-field-weight-table-column" className="views-field">
                                                            5920 kg, 13000 lbs
                                                        </td>
                                                        <td headers="view-field-weight-table-column" className="views-field">
                                                            7050 kg , 15500 lbs
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th id="view-field-driving-speed-table-column" className="views-field views-field-field_driving_speed" scope="row">Driving speed</th>
                                                        <td headers="view-field-driving-speed-table-column" className="views-field">
                                                        0-36 kmph , 22,5 mph
                                                    </td>
                                                        <td headers="view-field-driving-speed-table-column" className="views-field">
                                                        0-38 kmph , 23.8 mph
                                                    </td>
                                                        <td headers="view-field-driving-speed-table-column" className="views-field">
                                                        0-40 kmph, 0-25 mph
                                                    </td>
                                                        <td headers="view-field-driving-speed-table-column" className="views-field">
                                                        0-50 kmph, 0-31mph *)
                                                    </td>
                                                        <td headers="view-field-driving-speed-table-column" className="views-field">
                                                        0-50 kmph, 0-31mph *)
                                                    </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    

      );
    }
  }
  
  export default ProductsSpecs;

  
    
  