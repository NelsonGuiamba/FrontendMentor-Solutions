import React, { useEffect, useState, useRef } from "react";

function useOutsideClick(callback, except) {
    const ref = useRef(null);
    console.log(except);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                ref.current &&
                !ref.current.contains(event.target) &&
                event.target != except.current
            ) {
                callback(event);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [callback]);

    return ref;
}

export default function Cart(props) {
    const [isShowingDrop, setIsShowingDrop] = useState(false);
    const btnImg = useRef(null);
    const ref = useOutsideClick((e) => isShowingDrop && toggleCart(e), btnImg);
    function toggleCart(e) {
        console.log("toggle", e.target, e);
        setIsShowingDrop(!isShowingDrop);
    }
    function deleteItem(index) {
        props.setCart((prevCart) => {
            let newCart = Array.from(prevCart);
            newCart.pop(Number(index));
            return newCart;
        });
    }
    const cartItems = props.cart.map((item, index) => {
        return (
            <div className="cart-item" key={index}>
                <img
                    className="cart-thumb"
                    src="images/image-product-1-thumbnail.jpg"
                    alt="product thumbnail"
                />
                <div className="cart-description">
                    <p>Fall Limited Edition Sneackers</p>
                    <p className="cart-price">
                        <span data-id="price">$125 </span>
                        &times;
                        <span data-id="qtd">{item} </span>
                        <span data-id="result">{125 * item}$ </span>
                    </p>
                </div>
                <img
                    className="delete-cart"
                    src="images/icon-delete.svg"
                    alt="delete"
                    onClick={() => deleteItem(index)}
                />
            </div>
        );
    });

    return (
        <>
            <img
                src="/images/icon-cart.svg"
                alt="cart"
                className="cart-img"
                onClick={(e) => toggleCart(e)}
                ref={btnImg}
            />
            <span
                className={`item-count ${
                    props.cart.length == 0 ? "hidden" : ""
                }`}
            >
                {props.cart.length}
            </span>
            <div
                ref={ref}
                className={`dropbox ${isShowingDrop ? "" : "hidden"}`}
            >
                <p className="drop-title">Cart</p>
                <hr />
                {props.cart.length == 0 ? (
                    <div className="cart-empty">
                        <p>Your cart is empty</p>
                    </div>
                ) : (
                    <div className="cart-content">
                        {cartItems}
                        <button>Checkout</button>
                    </div>
                )}
            </div>
        </>
    );
}
