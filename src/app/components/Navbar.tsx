"use client";

import { useState } from "react";
import Link from 'next/link'
import { usePathname } from "next/navigation"

function Navbar() {
    return (
        <header className="header">
            <div className="container">
                <a href="#" className="logo">Portfolio</a>
                <nav className="desktopNav">
                    <a href="#projects" className="navLink active">Projects</a>
                    <a href="#about" className="navLink">About Me</a>
                    <a href="#contact" className="navLink">Contact</a>
                </nav>
                <button className="hamburgerBtn">☰</button>
            </div>
        </header>
    );
}

export default Navbar;