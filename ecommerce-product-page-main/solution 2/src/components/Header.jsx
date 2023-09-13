import React from "react";
import { useRef, useState } from "react";
import Cart from "./Cart";

export default function Header(props) {
    const mobileNav = useRef(null);
    const [isShowingNavBar, setIsShowingNavBar] = useState(false);
    function toogleNavbar() {
        if (isShowingNavBar) mobileNav.current.style.width = "0";
        else mobileNav.current.style.width = "100%";
        setIsShowingNavBar(!isShowingNavBar);
    }

    return (
        <header className="container">
            <nav>
                {props.width > 400 ? (
                    <>
                        <div className="nav">
                            <div className="logo">
                                <img src="./images/logo.svg" alt="site-logo" />
                            </div>
                            <div className="nav-items">
                                <p>Collections</p>
                                <p>Men</p>
                                <p>Women</p>
                                <p>About</p>
                                <p>Contact</p>
                            </div>
                        </div>
                        <div className="profile">
                            <Cart cart={props.cart} setCart={props.setCart} />
                            <img
                                src="images/image-avatar.png"
                                alt="avatar"
                                className="avatar-img"
                            />
                        </div>
                    </>
                ) : (
                    <div className="mobile-menu">
                        <div className="mobile-nav" ref={mobileNav}>
                            <div className="mobile-nav__container">
                                <div className="close-menu">
                                    <img
                                        src="./images/icon-close.svg"
                                        alt="icon-close"
                                        onClick={toogleNavbar}
                                    />
                                </div>
                                <div className="mobile-nav__items">
                                    <p>Collections</p>
                                    <p>Men</p>
                                    <p>Women</p>
                                    <p>About</p>
                                    <p>Contact</p>
                                </div>
                            </div>
                        </div>
                        <div className="logo">
                            <img
                                src="./images/icon-menu.svg"
                                onClick={toogleNavbar}
                                alt="icon-menu"
                            />
                        </div>
                        <div className="logo">
                            <img src="./images/logo.svg" alt="site-logo" />
                        </div>

                        <div className="profile">
                            <Cart
                                cart={props.cart}
                                setCart={props.setCart}
                                width={props.width}
                            />
                            <img
                                src="images/image-avatar.png"
                                alt="avatar"
                                className="avatar-img"
                            />
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
