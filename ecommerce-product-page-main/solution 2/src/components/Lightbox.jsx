import React from "react";

export default function LightBox(props) {
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
        props.show && (
            <div className="modal">
                <div className="modal-content">
                    <svg
                        className="close-modal"
                        width="14"
                        height="15"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => props.setIsShowingLightBox(false)}
                    >
                        <path
                            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597
-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282
2.904 2.404.782l4.595 4.596L11.596.782Z"
                            fill="#ffffff"
                            fillRule="evenodd"
                        />
                    </svg>
                    <div className="prevBtn">
                        <img
                            src="images/icon-previous.svg"
                            alt="previos"
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
                    <div className="main-img">
                        <img
                            src={`images/image-product-${props.currentPhoto}.jpg`}
                            alt="product"
                        />
                    </div>
                    <div className="sub-imgs">
                        <div className="sub-img">
                            <img
                                src="images/image-product-1-thumbnail.jpg"
                                alt="product-1"
                                onClick={() => props.setCurrentPhoto(1)}
                                className={props.currentPhoto == 1 && "focused"}
                            />
                        </div>
                        <div className="sub-img">
                            <img
                                src="images/image-product-2-thumbnail.jpg"
                                alt="product-2"
                                onClick={() => props.setCurrentPhoto(2)}
                                className={props.currentPhoto == 2 && "focused"}
                            />
                        </div>
                        <div className="sub-img">
                            <img
                                src="images/image-product-3-thumbnail.jpg"
                                alt="product-3"
                                onClick={() => props.setCurrentPhoto(3)}
                                className={props.currentPhoto == 3 && "focused"}
                            />
                        </div>
                        <div className="sub-img">
                            <img
                                src="images/image-product-4-thumbnail.jpg"
                                alt="product-4"
                                onClick={() => props.setCurrentPhoto(4)}
                                className={props.currentPhoto == 4 && "focused"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}
