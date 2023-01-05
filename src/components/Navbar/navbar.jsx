import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';


import Logo from "../../images/logo.png";

const Menu = [
    {
        title: "Home",
        path: "/",
        id: 11,
    },
    {
        title: "About",
        path: "/about",
        id: 12,
    },
    {
        title: "Contact",
        path: "/contact",
        id: 13,
    },
    {
        title: "FAQ",
        path: "/faq",
        id: 14,
    },
    {
        title: "Login",
        path: "/login",
        id: 15,
    },
    {
        title: "register",
        path: "/register",
        id: 16,
    },
]


const Navbar = () => {
    const [navbar, setNavbar] = useState(false);


    const handleToggle = () => {
        if(navbar === false) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    const closeMenu = () => {
        setNavbar(false)
    }

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Link to="/"><img className= "logo" src={Logo} alt="logo" /></Link>
            </div>
            <ul className={ navbar ? "navbar__menu isOpen" :  "navbar__menu"}>
                {Menu.map((item) => {
                    const { title, path, id } = item;
                    return (
                    <li key={id}>
                        <Link onClick={() => closeMenu()} className="navLink" to={path}>{title}</Link>
                    </li>
                    );
            })}
            </ul>
            <button className="hamburger" onClick={() => handleToggle()}><FontAwesomeIcon icon={navbar ? faXmark : faBars} /></button>
        </nav>
    );
}



export default Navbar;