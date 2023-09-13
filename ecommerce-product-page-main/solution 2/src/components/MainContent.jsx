import React, { useState } from "react";
import Gallery from "./Gallery";
import classNames from "classnames";

export default function MainContent(props) {
    const [number, setNumber] = useState(1);
    function increaseNum() {
        setNumber((prevNum) => (prevNum + 1 < 10 ? prevNum + 1 : prevNum));
    }
    function decreaseNum() {
        setNumber((prevNum) => (prevNum - 1 > 0 ? prevNum - 1 : prevNum));
    }

    function addToCart() {
        props.setCart((prevCart) => {
            let newCart = Array.from(prevCart);
            newCart.push(number);
            return newCart;
        });
    }
    return (
        <main
            className={classNames({
                container: props.width > 400,
            })}
        >
            <div className="main-content">
                <Gallery
                    currentPhoto={props.currentPhoto}
                    setCurrentPhoto={props.setCurrentPhoto}
                    setIsShowingLightBox={props.setIsShowingLightBox}
                    width={props.width}
                />
                <div
                    className={classNames({
                        content: true,
                        container: props.width < 400,
                    })}
                >
                    <h2 className="company-name">Sneaker Company</h2>
                    <h1 className="title-h1">Fall Limited Edition Sneakers</h1>
                    <p className="description">
                        These low-profile sneakers are your perfect casual wear
                        companion. Featuring a durable rubber outer sole,
                        they’ll withstand everything the weather can offer
                    </p>
                    <div className="price__details">
                        <p className="discounted_price">
                            $125.00 <span className="discount">50%</span>
                        </p>
                        <p className="real_price">$250.00</p>
                    </div>
                    <div className="form">
                        <div className="input-container">
                            <img
                                src="images/icon-minus.svg"
                                data-id="minus-btn"
                                alt="minus"
                                onClick={decreaseNum}
                            />
                            <input
                                type="number"
                                value={number}
                                onFocus={(e) => e.target.blur()}
                            />
                            <img
                                src="images/icon-plus.svg"
                                data-id="plus-btn"
                                alt="plus"
                                onClick={increaseNum}
                            />
                        </div>
                        <button className="add-btn" onClick={addToCart}>
                            <svg
                                width="22"
                                height="20"
                                viewBox="0 0 22 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                                    fill="#69707D"
                                    fillRule="nonzero"
                                />
                            </svg>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
