import React, { useRef } from "react";
import { useEffect } from "react";

export default function Gallery(props) {
    const ref = useRef(null);
    useEffect(() => {
        const showLightbox = () => props.setIsShowingLightBox(true);
        if (props.width > 400)
            ref.current.addEventListener("click", showLightbox);
    }, [props.width]);
    function nextPhoto() {
        props.setCurrentPhoto((prevPhoto) => {
            if (prevPhoto == 4) return 1;
            return prevPhoto + 1;
        });
    }
    function prevPhoto() {
        props.setCurrentPhoto((prevPhoto) => {
            if (prevPhoto == 1) return 4;
            return prevPhoto - 1;
        });
    }
    return (
        <div className="products">
            {props.width > 400 ? (
                <>
                    <div className="main_product">
                        <img
                            ref={ref}
                            src={`images/image-product-${props.currentPhoto}.jpg`}
                            alt="sneakers"
                        />
                    </div>
                    <div className="sub_products">
                        <img
                            src="images/image-product-1-thumbnail.jpg"
                            alt="product"
                            className={props.currentPhoto == 1 && "focused"}
                            onClick={() => props.setCurrentPhoto(1)}
                        />
                        <img
                            src="images/image-product-2-thumbnail.jpg"
                            alt="product"
                            className={props.currentPhoto == 2 && "focused"}
                            onClick={() => props.setCurrentPhoto(2)}
                        />
                        <img
                            src="images/image-product-3-thumbnail.jpg"
                            alt="product"
                            className={props.currentPhoto == 3 && "focused"}
                            onClick={() => props.setCurrentPhoto(3)}
                        />
                        <img
                            src="images/image-product-4-thumbnail.jpg"
                            alt="product"
                            className={props.currentPhoto == 4 && "focused"}
                            onClick={() => props.setCurrentPhoto(4)}
                        />
                    </div>
                </>
            ) : (
                <div className="main_product">
                    <img
                        ref={ref}
                        src={`images/image-product-${props.currentPhoto}.jpg`}
                        alt="sneakers"
                    />
                    <div className="prevBtn">
                        <img
                            src="images/icon-previous.svg"
                            alt="previous"
                            onClick={prevPhoto}
                        />
                    </div>
                    <div className="nextBtn">
                        <img
                            src="images/icon-next.svg"
                            alt="next"
                            onClick={nextPhoto}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
