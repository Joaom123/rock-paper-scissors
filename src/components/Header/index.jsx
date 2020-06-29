import React from "react";
import "./index.css";

function Header({score}) {
    return (
        <article className="header">
            <header className="header__title">
                <h1>ROCK PAPER SCISSORS</h1>
            </header>
            <div className="headerScore">
                <span className="headerScore__title">SCORE</span>
                <span className="headerScore__score">{score}</span>
            </div>
        </article>
    );
}

export default Header;