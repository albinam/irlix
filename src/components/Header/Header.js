import React from 'react';
import "./Header.scss";
import {ReactComponent as Logo} from "../../assets/images/logo.svg";

function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <Logo/>
            </div>
        </div>
    );
}

export default Header;