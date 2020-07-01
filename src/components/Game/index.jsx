import React from "react";
import "./index.css";
import {BgTriangle, IconRock} from "../../assets";
import svg from "../../assets/img/bg-triangle.svg";

function Game({}) {
    return (
        <section className="game" style={{backgroundImage: `url(${svg})`}}>
            <Icon />
        </section>
    );
}

export default Game;

function Icon() {
    return(
        <span>
            <IconRock />
        </span>
    );
}