import React, { Component } from 'react';
import '../css/Language.css';

let jezik = "en";
let putanja = "/england_logo.png";
let putanja1 = "/england_logo.png";
let putanja2 = "/serbian_logo.png";
if (localStorage.getItem("localeNew") === "en"){
    jezik = "sr";
    putanja = "/england_logo.png";
} else {
    jezik = "en";
    putanja = "/serbian_logo.png";
}

class Language extends Component {
    setLanguage(language) {
        window.localStorage.setItem("localeNew", language);
        window.location.reload();
    }

    render() {
        return (
            <div className="Language">
                <div className="LanguagePC">
                    <button onClick={this.setLanguage.bind(this, "en")} className="dugme_jezici1">
                      <img src={putanja1} alt="logo" className="icon_jezici"/>
                    </button>
                    <button onClick={this.setLanguage.bind(this, "sr")} className="dugme_jezici2">
                      <img src={putanja2} alt="logo" className="icon_jezici"/>
                    </button>
                </div>
                <div className="LanguagePhone">
                    <button onClick={this.setLanguage.bind(this, jezik)} className="dugme_jezici">
                      <img src={putanja} alt="logo" className="icon_jezici"/>
                    </button>
                </div>
            </div>    
        );
    }
}

export default Language;