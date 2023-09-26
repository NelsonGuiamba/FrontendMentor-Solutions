import { useState } from "react";
import FullMoon from "../assets/icons/FullMoon.svg?react";
import Moon from "../assets/icons/Moon.svg?react";

const Header = () => {
    const [theme, setTheme] = useState(true); // true = light
    const toogleTheme = () => {
        document.body.parentElement.classList.toggle("dark");
        setTheme(!theme);
    };
    return (
        <header className="dark:bg-blue-600 dark:text-white">
            <nav className="container flex justify-between pt-8 pb-8 ">
                <h1 className="font-bold md:text-2xl">Where in the world</h1>
                <div
                    className="flex gap-4 text-sm md:text-base"
                    onClick={toogleTheme}
                >
                    {theme ? (
                        <Moon width="1em" height="1em" />
                    ) : (
                        <FullMoon width="1em" height="1em" />
                    )}
                    <p className="">Dark Mode</p>
                </div>
            </nav>
        </header>
    );
};

export default Header;
