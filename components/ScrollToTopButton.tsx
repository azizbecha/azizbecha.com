"use client"

import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when user scrolls down 100px
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    // Scroll to top when button is clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`${isVisible ? "block" : "hidden"} fixed z-50 bottom-5 right-5 p-3 bg-main text-white rounded-full hover:bg-transparent border-2 hover:border-main hover:text-main transition-all duration-300 ease-in-out`}
        >
            <FaArrowUp />
        </button>
    );
};

export default ScrollToTopButton;
