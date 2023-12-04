'use client';

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import './Darkmode.css';

export default function Darkmode() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        // Verifica si se está ejecutando en el entorno del navegador
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem("theme") || "dark";
            document.body.classList.add(savedTheme);
            setDarkMode(savedTheme === "dark");
        }
    }, []); // Se ejecuta solo una vez al montar el componente

    const switchTheme = () => {
        const newTheme = darkMode ? "light" : "dark";
        document.body.classList.replace(darkMode ? "dark" : "light", newTheme);
        localStorage.setItem("theme", newTheme);
        setDarkMode(!darkMode);
    };

    return (
        <div className="mid">
            <label className={`rocker ${!darkMode ? 'checked' : ''}`}>
                <input type="checkbox" checked={!darkMode} onChange={() => {}} onClick={switchTheme} />
                <span className={'switch_left'}><FontAwesomeIcon icon={faSun} /></span>
                <span className={'switch_right'}><FontAwesomeIcon icon={faMoon} /></span>
            </label>
        </div>
    );
}