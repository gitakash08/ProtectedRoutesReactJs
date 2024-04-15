import React, { useState, useEffect } from "react";
import '../css/about.css';

const About = () => {
    const placeholders = ["'Jobs'", "'Food'", "'Apprenticeship'", "'Others'"];
    const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
    const [charCount, setCharCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
            setCharCount(0);
        }, 1000); // Change placeholder every 3 seconds
        return () => clearInterval(intervalId);
    }, [placeholders.length]);

    useEffect(() => {
        const placeholderText = placeholders[currentPlaceholder];
        const intervalId = setInterval(() => {
            setCharCount((prev) => (prev + 1) % (placeholderText.length + 1));
        }, 100);

        return () => clearInterval(intervalId);
    }, [currentPlaceholder, placeholders]);

    return (
        <div className="search-bar">
            <input type="text" placeholder={'Search For  ' + placeholders[currentPlaceholder].substring(0, charCount)} />
        </div>
    )
}

export default About;