import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Lightbox from "./components/Lightbox";
import { useState, useEffect } from "react";

export default function App() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const resize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", resize);

        return () => window.removeEventListener("resize", resize);
    }, []);
    const [cart, setCart] = useState([]);
    const [isShowingLightBox, setIsShowingLightBox] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState(1);

    return (
        <>
            <Header cart={cart} setCart={setCart} width={width} />
            <MainContent
                setCart={setCart}
                setIsShowingLightBox={setIsShowingLightBox}
                currentPhoto={currentPhoto}
                setCurrentPhoto={setCurrentPhoto}
                width={width}
            />
            <Lightbox
                width={width}
                show={isShowingLightBox}
                currentPhoto={currentPhoto}
                setCurrentPhoto={setCurrentPhoto}
                setIsShowingLightBox={setIsShowingLightBox}
            />
        </>
    );
}
