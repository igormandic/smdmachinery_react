import React, { Component } from 'react';
import '../css/AttachmentList.css';
import { Link } from 'react-router-dom';
import { __ } from '../utils/i18n';

class AttachmentList extends Component {

    render() {
        let imagesArray = [];
        const nameOfImages = ['Attachment 1', 'Attachment 2','Attachment 3', 'Attachment 4','Attachment 5', 'Attachment 6','Attachment 7', 'Attachment 8','Attachment 9', 'Attachment 10','Attachment 11', 'Attachment 12','Attachment 13', 'Attachment 14','Attachment 15', 'Attachment 16','Attachment 17', 'Attachment 18','Attachment 19', 'Attachment 20','Attachment 21', 'Attachment 22','Attachment 23'];
        const nameOfCompany = window.localStorage.nameOfCompany;
        const attachments = this.props.attachments; 
        for (let i = 0; i<attachments.length; i++) {
            let pahtToImage = `/${nameOfCompany}/Prikljucci/${attachments[i]}/head_image.jpg`;
            let pathToAttachment = `/company/${nameOfCompany}/attachments/${attachments[i]}`; 
            imagesArray.push(
            <button key={i} className="btn_attachment">
                <Link style={{textDecoration: "none"}} key={i} to={pathToAttachment}>
                <div>
                    <img src={pahtToImage} alt="product" className="slika_al"/>
                    <p className="nameOfAttachment">{__(nameOfImages[attachments[i]-1])} </p>
                    <div className="saznaj_vise_al" >{__('learnMore')}</div> 
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