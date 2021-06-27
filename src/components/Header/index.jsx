import React from "react";
import "./index.css";
import {Logo} from "../../assets";

function Header({score}) {
    return (
        <article className="header">
            <Logo className="header__title"/>
            <div className="headerScore">
                <span className="headerScore__title">SCORE</span>
                <span className="headerScore__score">{score}</span>
            </div>
        </article>
    );
}

export default Header;