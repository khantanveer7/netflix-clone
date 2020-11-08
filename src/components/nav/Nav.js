import React, { useEffect, useState } from 'react';
import './Nav.css'

const Nav = () => {

    // StackOver Flow 
    // https://stackoverflow.com/questions/38980371/listen-for-scroll-up-down
    const [scrollPosition, setSrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setSrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={`nav ${scrollPosition && "nav__black"}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo"
                className="nav__logo" />
            <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="nav__avatar" className="nav__avatar" />
        </div>
    )
}

export default Nav
