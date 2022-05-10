import React from "react";
import "./slider.css"

// images
import juiceImg from "../../components/asset/imgs/juice.jpg"
// import juiceBigImg from "../../components/asset/imgs/juiceSmall.jpg"

function Slider() {
    return (
        <div className="container">
            <div className="sliderBox">
                <div className="bigImg">
                    <img className="juiceImg" src={juiceImg} />
                </div>
                <div className="slideInBox">
                    <ul className="sliderList">
                        <li className="sliderItem activeImg">
                            <img className="inImg" src={juiceImg} />
                        </li>
                        <li className="sliderItem">
                            <img className="inImg" src={juiceImg} />
                        </li>
                        <li className="sliderItem">
                            <img className="inImg" src={juiceImg} />
                        </li>
                        <li className="sliderItem">
                            <img className="inImg" src={juiceImg} />
                        </li>
                        <li className="sliderItem">
                            <img className="inImg" src={juiceImg} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Slider;