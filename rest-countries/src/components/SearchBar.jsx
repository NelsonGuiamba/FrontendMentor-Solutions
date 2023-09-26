import React from "react";
import { useState } from "react";
import ArrowDown from "../assets/icons/ArrowDown.svg?react";
import ArrowUp from "../assets/icons/ArrowUp.svg?react";
import Search from "../assets/icons/Search.svg?react"

const SearchBar = ({ search, setSearch, setRegion }) => {
    const [isDropbox, setisDropbox] = useState(false);

    let hidden = isDropbox ? "" : "hidden";
    const region = (region) => {
        setRegion(region);
        setisDropbox(false);
        setSearch('')
    };

    return (
        <div className="focus:outline-2 flex flex-col md:flex-row gap-8 md:justify-between">
            <div className="group w-full flex items-center px-4 gap-2 md:max-w-sm  h-fit bg-white dark:bg-blue-600">
                <Search />
            <input
                className="p-4 focus:border-none focus:outline-none placeholder:font-light dark:placeholder:text-white dark:bg-blue-600"
                type="text"
                placeholder="Search for a country..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            </div>
            <div className="relative mb-2 w-2/3 max-w-[200px] font-light ">
                <div
                    className="flex justify-between items-center p-4 border-2 dark:bg-blue-600"
                    onClick={() => setisDropbox((prevState) => !prevState)}
                >
                    <p>Filter by Region</p>
                    {isDropbox ? (
                        <ArrowUp width="1em" height="1em" />
                    ) : (
                        <ArrowDown width="1em" height="1em" />
                    )}
                </div>
                <div
                    className={`absolute w-full right-0 top-[75px] ${hidden}  flex flex-col z-10 bg-white dark:bg-blue-600`}
                >
                    <p
                        className="hover:bg-gray-200 px-4 pt-2"
                        onClick={() => region("africa")}
                    >
                        Africa
                    </p>
                    <p
                        className="hover:bg-gray-200 px-4"
                        onClick={() => region("americas")}
                    >
                        America
                    </p>
                    <p
                        className="hover:bg-gray-200 px-4"
                        onClick={() => region("asia")}
                    >
                        Asia
                    </p>
                    <p
                        className="hover:bg-gray-200 px-4"
                        onClick={() => region("europe")}
                    >
                        Europe
                    </p>
                    <p
                        className="hover:bg-gray-200 px-4 pb-2"
                        onClick={() => region("oceania")}
                    >
                        Oceania
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
