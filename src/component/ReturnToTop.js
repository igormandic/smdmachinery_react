import React, { Component } from "react";
import ScrollToTop from "react-scroll-up";
import '../css/ReturnToTop.css';

class ReturnToTop extends Component {

  render(){
    return (
        <ScrollToTop showUnder={160}  >
        <span className=""><img src="backToTop.png" className="returnLogo"/></span>
        </ScrollToTop>
    );
    }
}

export default ReturnToTop;