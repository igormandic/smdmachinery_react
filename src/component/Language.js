import React, { Component } from 'react';
import '../css/Language.css';

let jezik = "en";
let putanja = "/england_logo.png";

if(localStorage.getItem("localeNew") === "en"){
    jezik = "sr";
    putanja = "/england_logo.png";
}
else {
    jezik = "en";
    putanja = "/serbian_logo.png";
}

class Language extends Component {
    changeLanguage(e) {
        document.getElementById("myDropdown").classList.toggle("show");
        e.preventDefault();
    }
    setLanguage(language) {
        window.localStorage.setItem("localeNew", language);
        window.location.reload();
    }

    render() {
        return (
            <div className="Language">
                <button onClick={this.setLanguage.bind(this, jezik)} className="dugme_jezici">
                  <img src={putanja} alt="logo" className="icon_jezici"/>
                </button>
            </div>    
        );
    }
}

export default Language;