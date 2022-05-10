import React from "react";
import "./navbar.css"

function Navbar() {
    return (
       <div className="container">
            <ul className="navbarList">
                <li className="navbarItem">
                    <a className="navbarLink" href="#">Food Service</a>
                </li>
                <li className="navbarItem">
                    <a className="navbarLink" href="#">Health  Beauty</a>
                </li>
                <li className="navbarItem">
                    <a className="navbarLink" href="#">Industrial Ingredients</a>
                </li>
                <li className="navbarItem">
                    <a className="navbarLink" href="#">Beverages</a>
                </li>
                <li className="navbarItem">
                    <a className="navbarLink" href="#">Pet Supplies</a>
                </li>
                <li className="navbarItem">
                    <a className="navbarLink active" href="#">Frozen</a>
                </li>
                <li className="navbarItem">
                    <a className="navbarLink" href="#">Cleaning Products</a>
                </li>
            </ul>
       </div>
    )
}

export default Navbar;