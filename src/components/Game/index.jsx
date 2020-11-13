import React from "react";
import "./index.css";
import bgTriangle from "../../assets/img/bg-triangle.svg";
import {Hand} from "../index";

function Game({onClick, selectedHand, selectedHandByMachine}) {
    if(selectedHand)
        return <ChosenHand selectedHand={selectedHand} selectedHandByMachine={selectedHandByMachine}/>;

    return <InitialGame onClick={onClick} />;
}

function ChosenHand({selectedHand, selectedHandByMachine}) {
    return(
        <section className="game">
            <Hand type={selectedHand} />
            <Hand type={selectedHandByMachine} />
        </section>
    );
}

function InitialGame({onClick}) {
    return (
        <section
            className="game"
            style={{backgroundImage: `url(${bgTriangle})`}}
        >
            <Hand type="paper" onClick={onClick} />
            <Hand type="scissors" onClick={onClick} />
            <Hand type="rock" onClick={onClick} lastInTriangle />
        </section>
    );
}

export default Game;