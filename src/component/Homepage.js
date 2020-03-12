import React, { Component } from 'react';
import '../css/Homepage.css';
import {ListGroup} from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa";

class Homepage extends Component {

    render() {
        return (
            <div className="wrap">
                <div className="title">
                    <p>FIRME</p>
                </div>
                <div className="line"></div>
                <div className="homepage">
                    <ListGroup  className= "companyList" >
                        <ListGroup.Item variant="dark" className="companyBox">
                            <a href="/img/masina1.jpg"><span className ="company">Wille </span> 
                                <img className="logo" src="img/Wille/wille-logo.png"></img>
                                <img className="machine" src="img/masina1.png"></img>
                                <span className="arrow"><FaArrowRight /></span>
                            </a> 
                        </ListGroup.Item>
                        <ListGroup.Item variant="dark" className="companyBox">
                            <a href="/img/masina1.jpg"><span className ="company">Wille </span> 
                                <img className="logo" src="img/Wille/wille-logo.png"></img>
                                <img className="machine" src="img/masina1.png"></img>
                                <span className="arrow"><FaArrowRight /></span>
                            </a> 
                        </ListGroup.Item>
                        <ListGroup.Item variant="dark" className="companyBox">
                            <a href="/img/masina1.jpg"><span className ="company">Wille </span> 
                                <img className="logo" src="img/Wille/wille-logo.png"></img>
                                <img className="machine" src="img/masina1.png"></img>
                                <span className="arrow"><FaArrowRight /></span>
                            </a> 
                        </ListGroup.Item>
                        <ListGroup.Item variant="dark" className="companyBox">
                            <a href="/img/masina1.jpg"><span className ="company">Wille </span> 
                                <img className="logo" src="img/Wille/wille-logo.png"></img>
                                <img className="machine" src="img/masina1.png"></img>
                                <span className="arrow"><FaArrowRight /></span>
                            </a> 
                        </ListGroup.Item>
                        <div className = "cards">
                            <div className = "card1"> <a href="ContactPage.js"><img src = "img/Wille/slider5.jpg"></img></a> </div>
                            <div className = "card2"> <a href="App.js"><img src = "img/Wille/slider5.jpg"></img></a> </div>
                        </div>
                    </ListGroup>
                </div>
            </div>
    );
    }
}

export default Homepage;