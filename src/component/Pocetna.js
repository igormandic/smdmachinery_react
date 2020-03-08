import React from 'react';
import '../css/Pocetna.css';
import {ListGroup} from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa";

function Pocetna() {
    return (

        <div className="wrap">
            <div className="Naslov">
                <p>FIRME</p>
            </div>
            

        <div className="pocetna">
            <ListGroup  className= "listaFirmi" >
            <ListGroup.Item variant="dark"><a href="#"><span className ="firme">Wille </span><span className="Strelica"><FaArrowRight /></span></a> </ListGroup.Item>
            <ListGroup.Item variant="dark"><a href="#"><span className ="firme">Wille </span><span className="Strelica"><FaArrowRight /></span></a></ListGroup.Item>
            <ListGroup.Item variant="dark"><a href="#"><span className ="firme">Wille </span><span className="Strelica"><FaArrowRight /></span></a></ListGroup.Item>
            <ListGroup.Item variant="dark"><a href="#"><span className ="firme">Wille </span><span className="Strelica"><FaArrowRight /></span></a></ListGroup.Item>
            <ListGroup.Item variant="dark"><a href="#"><span className ="firme">Wille </span><span className="Strelica"><FaArrowRight /></span></a></ListGroup.Item>
            <ListGroup.Item variant="dark"><a href="#"><span className ="firme">Wille </span><span className="Strelica"><FaArrowRight /></span></a></ListGroup.Item>
            <ListGroup.Item variant="dark"><a href="#"><span className ="firme">Wille </span><span className="Strelica"><FaArrowRight /></span></a></ListGroup.Item>
            </ListGroup>
        </div>
        </div>
    );
}

export default Pocetna;