import React from "react";
import "./index.css";
import bgTriangle from "../../assets/img/bg-triangle.svg";
import {Hand} from "../index";

function Game({onClickHand, selectedHand, selectedHandByMachine, onClickPlayAgain}) {
    if (selectedHand)
        return <ChosenHand selectedHand={selectedHand} selectedHandByMachine={selectedHandByMachine}
                           onClickPlayAgain={onClickPlayAgain}/>;

    return <InitialGame onClick={onClickHand}/>;
}

function ChosenHand({selectedHand, selectedHandByMachine, onClickPlayAgain}) {
    return (
        <section className="game">
            <Hand type={selectedHand}/>
            <div>
                YOU WIN
                <button onClick={onClickPlayAgain}>
                    PLAY AGAIN
                </button>
            </div>
            <Hand type={selectedHandByMachine}/>
        </section>
    );
}

function InitialGame({onClick}) {
    return (
        <section
            className="game"
            style={{backgroundImage: `url(${bgTriangle})`}}
        >
            <Hand type="paper" onClick={onClick}/>
            <Hand type="scissors" onClick={onClick}/>
            <Hand type="rock" onClick={onClick} lastInTriangle/>
        </section>
    );
}

export default Game;