import React, { Component } from "react";
import "./counter.css"

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
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
            <div className="container">
                <div className="counterBox">
                    <span className="motts">MOTT'S</span>
                    <h3 className="motsTitle">Mott's Unsweetened Applesauce</h3>
                    <p className="motsText">Pack Size</p>
                    <span className="motsTime">24/16.90 oz</span>
                    <p className="loremText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam facilis doloribus suscipit tempore nostrum labore.</p>
                    <a className="download" href="#">
                        <i className='bx bx-cloud-download'></i>
                        <span> Download Spet Sheet</span>
                    </a>
                    <div className="sumBox">
                        <div className="price1">
                            <p className="sum">${this.state.result}</p>
                            <span className="valuta">/Cs</span>
                            <span>"[$0.21/oz]"</span>
                        </div>
                        <div className="price1">
                            <p className="sum">${this.state.resultPit}</p>
                            <span className="valuta">/Pit</span>
                        </div>
                    </div>
                    <p className="infoText">Apprux Lead Time: 12 days</p>
                    <div className="priceBtnGr">
                       <div className="priceInput">
                            <input type="number" />
                            <button onClick={this.handlePlus}>+</button>
                            <button onClick={this.handleMinus}>-</button>
                       </div>
                       <div className="priceBtnBox">
                           <button className="cardsBtn">
                                <i class='bx bx-cart-download'></i>
                               <span>Add to Card</span>
                           </button>
                           <button className="PalletBtn">
                                <i className='bx bxs-cog' ></i>
                               <span>Custom Pallet</span>
                           </button>
                       </div>
                       {/* <span className="downSpan">Minimum pallet quantity: 2</span> */}
                    </div>
                    <p className="wishlistText">
                        <i className='bx bx-star'></i>
                        <span>Add to Wishlist</span>
                    </p>
                </div>
            </div>
        )
    }
}

export default Counter;