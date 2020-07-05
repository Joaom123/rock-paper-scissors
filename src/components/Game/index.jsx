import React from "react";
import "./index.css";
import {IconRock, IconPaper, IconScissors} from "../../assets";
import bgTriangle from "../../assets/img/bg-triangle.svg";

function Game({}) {
    return (
        <section
            className="game"
            style={{backgroundImage: `url(${bgTriangle})`}}
        >
            <Hand type="paper" />
            <Hand type="scissors" />
            <Hand type="rock" />
        </section>
    );
}

export default Game;

function Hand({type}) {
    return(
        <div className={`game__hand game__hand--${type}`}>
            <div className={`game__handIcon game__handIcon--${type}`}>
                <IconRock />
            </div>
        </div>
    );
}