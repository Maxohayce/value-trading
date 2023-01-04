import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";


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
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Link to="/"><img className= "logo" src={Logo} alt="logo" /></Link>
            </div>
            <ul className="navbar__menu">
                {Menu.map((item) => {
                    const { title, path, id } = item;
                    return (
                    <li key={id}>
                        <Link className="navLink" to={path}>{title}</Link>
                    </li>
                    );
            })}
            </ul>
        </nav>
    );
}



export default Navbar;