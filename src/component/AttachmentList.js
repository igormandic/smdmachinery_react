import React, { Component } from 'react';
import '../css/AttachmentList.css';
import { Link } from 'react-router-dom'

class AttachmentList extends Component {

    render() {
        let imagesArray = [];
        const nameOfImages = ['Drobilica za grane', 'Freza za sneg', 'Hidraulicna platforma sa korpom', 'Hidraulicni zadnji noz', 'Kasika za lisce', 'Kasika za sneg', 'Kosilica za travu', 'Multifunkcionalna kasika', 'Platforma', 'Posipac', 'Posipac soll-rizle', 'Posipac za mokro posipanje', 'Pranje pod visokim pritiskom', 'Raonik za led', 'Rezervoar za vodu', 'Rotaciona cetka', 'Sakupljaci lisca', 'Tarup', 'Tarup sa strelom', 'Utovarna Kasika', 'Vibro ploce', 'Visokoutovarna kasika'];
        const nameOfCompany = window.localStorage.nameOfCompany;
        for (let i = 1; i<=nameOfImages.length; i++) {
            let pahtToImage = `/${nameOfCompany}/Prikljucci/${i}/head_image.jpg`;
            let pathToAttachment = `/company/${nameOfCompany}/attachments/${i}`; 
            imagesArray.push(
            <button key={i} className="btn_attachment">
                <Link style={{textDecoration: "none"}} key={i} to={pathToAttachment}>
                <div>
                    <img src={pahtToImage} alt="product" className="slika_al"/>
                    <p className="nameOfAttachment">{nameOfImages[i-1]}</p>
                    <div className="saznaj_vise_al" > Saznajte vise </div> 
                </div>
                </Link>
            </button>
            )
        }

        return (
            <div className="attachment_middle">
                {imagesArray}
            </div>
    );
    }
}

export default AttachmentList;