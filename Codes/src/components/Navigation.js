import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const Navigation = ({ navLink }) => 
{
    const [ menu, setMenu ] = useState(false);
    const clickMenu = () =>
    {
        setMenu(!menu);
    }

    return(
        <header id="nav-bar">
            <button type="button" className="nav-btn" onClick={ clickMenu }></button>
            <nav className={`nav-menu container ${menu ? "active" : ""}`}>
                { 
                    navLink.map((nav) => <HashLink key={nav.id} className="nav-link" smooth to={nav.link}>{nav.title}</HashLink>) 
                }
            </nav>
        </header>
    )
};

export default Navigation;