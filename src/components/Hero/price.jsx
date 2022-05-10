import React from "react";
import "./price.css"

function PriceCard() {
    return (
        <div className="priceBox">
            <ul className="cardList">
                <li className="cardItem">
                    <div className="headCard">
                        <p>1 Pallet Delivered Price</p>
                    </div>
                    <div className="allSum">
                        <p>$45.5/Cs</p>
                        <p>$546.23/Plt</p>
                        <span>$0.02/oz</span>
                    </div>
                </li>
                <li className="cardItem">
                    <div className="headCard">
                        <p>1 Pallet Delivered Price</p>
                    </div>
                    <div className="allSum">
                        <p>$45.5/Cs</p>
                        <p>$546.23/Plt</p>
                        <span>$0.02/oz</span>
                    </div>
                </li>
                <li className="cardItem">
                    <div className="headCard">
                        <p>1 Pallet Delivered Price</p>
                    </div>
                    <div className="allSum">
                        <p>$45.5/Cs</p>
                        <p>$546.23/Plt</p>
                        <span>$0.02/oz</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default PriceCard;