import React from "react";
import "./footer.css"

import logoFooter from "../../components/asset/imgs/logoel.jpg"

function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="rower">
                    <div className="footer-block">
                        <a className="link-logo">
                            <img className="footerLogo" src={logoFooter} />
                        </a>
                        <div className="texts">
                            <p className="footer-text after">Contact us on our social media</p>
                        </div>
                        <ul className="social-list rower middleler">
                            <li className="social-item list-sty">
                                <a target="_blank">
                                    <i className='bx bxl-facebook'></i>
                                </a>
                            </li>
                            <li className="social-item list-sty">
                                <a target="_blank">
                                    <i className='bx bxl-twitter' ></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <ul className="footer-list rower betweener"> 
                        <li className="footer-item list-sty">
                            <h3 className="footer-title">FOR CUSTOMERS</h3>
                            <ul className="in-list">
                                <li className="in-item list-sty">
                                    <a className="fo-item-link text-none">Revisions</a>
                                </li>
                                <li className="in-item list-sty">
                                    <a className="fo-item-link text-none">Sheets</a>
                                </li>
                                <li className="in-item list-sty">
                                    <a className="fo-item-link text-none">Quiz</a>
                                </li>
                                <li className="in-item list-sty">
                                    <a className="fo-item-link text-none">Returns</a>
                                </li>
                                <li className="in-item list-sty">
                                    <a className="fo-item-link text-none">Policies</a>
                                </li>
                            </ul>
                        </li>
                        <li className="footer-item list-sty">
                            <h3 className="footer-title">SERVICES</h3>
                            <ul className="in-list">
                                <li className="in-item list-sty">
                                    <a className="fo-item-link text-none">About us</a>
                                </li>
                                <li className="in-item list-sty">
                                    <a className="fo-item-link text-none">Partners</a>
                                </li>
                                <li className="in-item list-sty">
                                    <a className="fo-item-link text-none">Contact us</a>
                                </li>
                                <li className="in-item list-sty">
                                    <a className="fo-item-link text-none">Careers</a>
                                </li>
                            </ul>
                        </li>
                        <li className="footer-item list-sty">
                            <h3 className="footer-title">COMPANY</h3>
                            <ul className="in-list">
                                <li className="in-item list-sty">
                                    <a className="fo-item-link text-none">Conditions</a>
                                </li>
                                <li className="in-item list-sty">
                                    <a className="fo-item-link text-none">Solutions</a>
                                </li>
                                <li className="in-item list-sty">
                                    <a className="fo-item-link text-none">Jobs</a>
                                </li>
                                <li className="in-item list-sty">
                                    <a className="fo-item-link text-none">Contact</a>
                                </li>
                                <li className="in-item list-sty">
                                    <a className="fo-item-link text-none">Terms</a>
                                </li>
                            </ul>
                        </li>
                        <li className="footer-item list-sty">
                            <h3 className="footer-title">HELP CENTER</h3>
                            <ul className="in-list">
                                <li className="in-item list-sty">
                                    <a className="fo-item-link text-none">Google Play</a>
                                </li>
                                <li className="in-item list-sty">
                                    <a className="fo-item-link text-none">Solutions</a>
                                </li>
                                <li className="in-item list-sty">
                                    <a className="fo-item-link text-none">Manage Your Account</a>
                                </li>
                                <li className="in-item list-sty">
                                    <a className="fo-item-link text-none">ePallet Asisstant</a>
                                </li>
                                <li className="in-item list-sty">
                                    <a className="fo-item-link text-none">Help</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;