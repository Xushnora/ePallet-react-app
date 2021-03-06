import React from "react";
import "./back.css"

function ItemIn() {
    return (
        <div className="container">
            <ul className="ulList">
                <li className="inItem">
                    <a className="inItemLink" >Frozen</a>
                    <i className='bx bx-chevron-right'></i>
                </li>
                <li className="inItem">
                    <a className="inItemLink" >Juice</a>
                    <i className='bx bx-chevron-right'></i>
                </li>
                <li className="inItem">
                    <a className="inItemLink" >Mott's Unsweetened Applesauce</a>
                </li>
            </ul>
            <button className="backBtn">
                <i className='bx bx-arrow-from-right'></i>
                <span>Back</span>
            </button>
        </div>
    )
}

export default ItemIn;