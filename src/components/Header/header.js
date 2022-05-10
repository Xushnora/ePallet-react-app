import React from "react";
import logoImg from "../../components/asset/imgs/logoel.jpg"
import "./header.css"

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="headerBox">
                    <div className="logobox">
                        <a href="#">
                            <img className="imgLogo" src={logoImg} />
                        </a>
                    </div>
                    <div className="searchBox">
                        <div className="inputBox">
                            <i className='bx bx-search'></i>
                            <input type="text" placeholder="Type to search" />
                        </div>
                        <select className="selects" name="All Categories">
                            <option>All Categories</option>
                            <option>Food Service</option>
                            <option>Health  Beauty</option>
                            <option>Industrial Ingredients</option>
                            <option>Beverages</option>
                            <option>Pet Supplies</option>
                            <option>Frozen</option>
                            <option>Cleaning Products</option>
                        </select>
                    </div>
                    <div className="btnGroup">
                        <a className="headerLink" href="#">
                            <i className='bx bx-envelope'></i>
                            <span>Orders</span>
                        </a>
                        <a className="headerLink" href="#">
                            <i className='bx bx-credit-card-alt' ></i>
                            <span>Cards</span>
                        </a>
                        <a className="headerLink" href="#">
                            <i className='bx bx-user'></i>
                            <span>Profile</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;