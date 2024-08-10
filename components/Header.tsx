"use client"

import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`fixed top-0 left-0 w-full h-24 px-8 flex justify-between items-center transition-colors duration-300 ${isScrolled ? "bg-amber-100" : "bg-transparent"}`}>
            <div>Logo</div>
            <div className="flex gap-12 lg:gap-16 items-center">
                <div className="py-2 px-2 hover:bg-white hover:bg-opacity-70 rounded-lg transition-colors duration-300">Farming Guide</div>
                <div className="py-2 px-2 hover:bg-white hover:bg-opacity-70 rounded-lg transition-colors duration-300">Vertical Farming</div>
                <div className="py-2 px-2 hover:bg-white hover:bg-opacity-70 rounded-lg transition-colors duration-300">Irrigation</div>
                <div className="py-2 px-2 hover:bg-white hover:bg-opacity-70 rounded-lg transition-colors duration-300">Contact Us</div>
            </div>
        </div>
    )
}
