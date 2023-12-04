'use client';

import React from "react"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import './Darkmode.css'

export default function Darkmode() {
    const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === null ? true : localStorage.getItem("theme") === "dark" ? true : false);

    const body = document.body;
    const lightTheme = "light";
    const darkTheme = "dark";
    let theme;

    if (localStorage) {
        theme = localStorage.getItem("theme");
    }

    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme);
    } else {
        body.classList.add(darkTheme);
    }

    const switchTheme = () => {
        if (theme === lightTheme) {
            body.classList.replace(lightTheme, darkTheme);
            localStorage.setItem("theme", "dark");
            theme = darkTheme;
            setDarkMode(true);
        } else {
            body.classList.replace(darkTheme, lightTheme);
            localStorage.setItem("theme", "light");
            theme = lightTheme;
            setDarkMode(false);
        }
    }

    return (
        <div className="mid">
            <label className={`rocker ${theme === lightTheme ? 'checked' : ''}`}>
                <input type="checkbox" checked={theme === lightTheme ? true : false} onChange={()=>{}} onClick={() => switchTheme()}/>
                <span className={'switch_left'}><FontAwesomeIcon icon={faSun}/></span>
                <span className={'switch_right'}><FontAwesomeIcon icon={faMoon}/></span>
            </label>
        </div>
    )
}