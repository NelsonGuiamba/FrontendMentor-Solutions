import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Country = ({ gotoCountry, name, region, capital, flag }) => {
    return (
        <div className="w-fit bg-white dark:bg-blue-600" onClick={gotoCountry}>
            <LazyLoadImage
                src={flag}
                alt={"flag of" + name}
                width={300}
                height={200}
                className="z-0  w-[300px] h-[200px]"
                effect="blur"
            />
            <div className="p-6">
                <h2 className="my-2 text-lg font-bold ">{name}</h2>
                <p className="text-base font-medium mb-1">
                    Population:{" "}
                    <span className="font-normal">84.550.00,00</span>
                </p>
                <p className="text-base font-medium mb-1">
                    Region: <span className="font-normal">{region}</span>
                </p>
                <p className="text-base font-medium mb-8">
                    Capital: <span className="font-normal">{capital}</span>
                </p>
            </div>
        </div>
    );
};

export default Country;
