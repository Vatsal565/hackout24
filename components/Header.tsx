"use client"

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Navigation from "./Navigation";

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
        <div className={`fixed top-0 left-0 w-full h-24 px-8 flex justify-between items-center transition-colors duration-300 z-10 ${isScrolled ? "bg-amber-100" : "bg-transparent"}`}>
            <div>Logo</div>
            <Navigation />
        </div>
    )
}
