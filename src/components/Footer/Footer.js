import React from 'react';
import "./Footer.scss";
import {ReactComponent as Logo} from "../../assets/images/logo.svg";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__logo">
                <Logo/>
            </div>
        </div>
    );
}

export default Footer;