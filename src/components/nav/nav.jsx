import React, { useState, useRef } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { TiGroupOutline } from "react-icons/ti";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";
import "./nav.css";

function Navbar() {
    const [active, setActive] = useState(0);

    const toggleActive = (index) => {
        setActive(index);
    };

    return (
        <div className="navigation">
            <a href="#home">
                <AiOutlineHome className={`icon ${active === 0 ? "active-nav" : null}`} onClick={() => toggleActive(0)} />
            </a>
            <a href="#members">
                <TiGroupOutline className={`icon ${active === 1 ? "active-nav" : null}`} onClick={() => toggleActive(1)} />
            </a>
            <a href="#about">
                <AiOutlineUser className={`icon ${active === 2 ? "active-nav" : null}`} onClick={() => toggleActive(2)} />
            </a>
            <a href="#contact">
                <BiMessageRoundedDots className={`icon ${active === 3 ? "active-nav" : null}`} onClick={() => toggleActive(3)} />
            </a>
            <a href="#footer">
                <BsArrowDownCircle className={`icon ${active === 4 ? "active-nav" : null}`} onClick={() => toggleActive(4)} />
            </a>
        </div>
    );
}

export default Navbar;
