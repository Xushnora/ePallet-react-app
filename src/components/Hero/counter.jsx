import React, { Component } from "react";
import "./counter.css"

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            result: 32,
            resultPit: 60
        }
    }

    handlePlus = () => {
        this.setState({count: this.state.count + 1})
        this.setState({result: this.state.result + 32})
        this.setState({resultPit: this.state.resultPit + 60})
    }

    handleMinus = () => {
        this.setState({count: this.state.count - 1})
        this.setState({result: this.state.result - 32})
        this.setState({resultPit: this.state.resultPit - 60})
    }

    render() {
        return (
            <div className="counterBox">
                    <p className="motts">MOTT'S</p>
                    <h3 className="motsTitle">Mott's Unsweetened Applesauce</h3>
                    <p className="motsText">Pack Size: </p>
                    <span className="motsTime">24/16.90 oz</span>
                    <p className="loremText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam facilis doloribus suscipit tempore nostrum labore.</p>
                    <a className="download">
                        <i className='bx bx-cloud-download'></i>
                        <span> Download Spet Sheet</span>
                    </a>
                    <hr />
                    <div className="sumBox">
                        <div className="price1">
                            <p className="sum">${this.state.result}</p>
                            <span className="valuta">/Cs</span>
                            <span>"[$0.21/oz]"</span>
                        </div>
                        <div className="price2">
                            <p className="sum">${this.state.resultPit}</p>
                            <span className="valuta">/Pit</span>
                        </div>
                    </div>
                    <p className="infoText">Apprux Lead Time: <strong style={{color: "#333"}}>12 days</strong></p>
                    <p className="infoTexts">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <div className="priceBtnGr">
                       <div className="priceInput">
                            <p className="numCount">{this.state.count}</p>
                            <div className="handleBtn">
                                <button className="onePlus" onClick={this.handlePlus}>
                                    <i className='bx bxs-up-arrow'></i>
                                </button>
                                <button className="oneMinus" onClick={this.handleMinus}>
                                    <i className='bx bxs-down-arrow'></i>
                                </button>
                            </div>
                       </div>
                       <div className="priceBtnBox">
                           <button className="cardsBtn">
                                <i className='bx bx-cart-download'></i>
                               <span>Add to Card</span>
                           </button>
                           <button className="PalletBtn">
                                <i className='bx bxs-cog' ></i>
                               <span>Custom Pallet</span>
                           </button>
                       </div>
                    </div>
                    <p className="downSpan">Minimum pallet quantity: 2</p>
                    <p className="wishlistText">
                        <i className='bx bx-star'></i>
                        <span>Add to Wishlist</span>
                    </p>
            </div>
    
        )
    }
}

export default Counter;