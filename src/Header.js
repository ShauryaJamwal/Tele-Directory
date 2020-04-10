import React from 'react';
import './Header.css';

const Header = function (props) {
    return (
        <div className="header">
            <u>{props.heading}</u>
        </div>
    )
}

export default Header;