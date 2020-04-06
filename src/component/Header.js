import React from 'react';
import '../css/Header.css';
import { __ } from '../utils/i18n'
import Language from './Language';

function Header() {
    return (
        <div className="header">
            <a href="/" className="logo">{__('CompanyLogo')}</a>
            <Language />
        </div>
    );
}

export default Header;