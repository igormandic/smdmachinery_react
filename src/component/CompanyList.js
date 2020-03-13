import React, { Component } from 'react';
import '../css/CompanyList.css';
import { ListGroup } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class CompanyList extends Component {

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
                            <Link to={{pathname:"/company", info:"sve sto treba za tu firmu"}}>
                                <span className ="company">Wille </span> 
                                <img className="logo" src="img/Wille/wille-logo.png" alt=""></img>
                                <img className="machine" src="img/masina1.png" alt=""></img>
                                <span className="arrow"><FaArrowRight /></span>
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item variant="dark" className="companyBox">
                            <Link to={{pathname:"/company", info:"sve sto treba za tu firmu"}}>
                                <span className ="company">Wille </span> 
                                <img className="logo" src="img/Wille/wille-logo.png" alt=""></img>
                                <img className="machine" src="img/masina1.png" alt=""></img>
                                <span className="arrow"><FaArrowRight /></span>
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item variant="dark" className="companyBox">
                            <Link to={{pathname:"/company", info:"sve sto treba za tu firmu"}}>
                                <span className ="company">Wille </span> 
                                <img className="logo" src="img/Wille/wille-logo.png" alt=""></img>
                                <img className="machine" src="img/masina1.png" alt=""></img>
                                <span className="arrow"><FaArrowRight /></span>
                            </Link> 
                        </ListGroup.Item>
                        <ListGroup.Item variant="dark" className="companyBox">
                            <Link to={{pathname:"/company", info:"sve sto treba za tu firmu"}}>
                                <span className ="company">Wille </span> 
                                <img className="logo" src="img/Wille/wille-logo.png" alt=""></img>
                                <img className="machine" src="img/masina1.png" alt=""></img>
                                <span className="arrow"><FaArrowRight /></span>
                            </Link> 
                        </ListGroup.Item>
                        <div className = "cards">
                            <div className = "card1"> <a href="ContactPage.js"><img src = "img/Wille/slider5.jpg" alt=""></img></a> </div>
                            <div className = "card2"> <a href="App.js"><img src = "img/Wille/slider5.jpg" alt=""></img></a> </div>
                        </div>
                    </ListGroup>
                </div>
            </div>
    );
    }
}

export default CompanyList;