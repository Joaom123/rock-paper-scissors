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
        <section className="game game--afterPlaying">
            <Hand type={selectedHand}/>
            <ResultAndPlayAgain onClickPlayAgain={onClickPlayAgain}/>
            <Hand type={selectedHandByMachine}/>
        </section>
    );
}

function InitialGame({onClick}) {
    return (
        <section
            className="game game--initial"
            style={{backgroundImage: `url(${bgTriangle})`}}
            data-testid="game-initial"
        >
            <Hand type="paper" onClick={onClick}/>
            <Hand type="scissors" onClick={onClick}/>
            <Hand type="rock" onClick={onClick} lastInTriangle/>
        </section>
    );
}

function ResultAndPlayAgain(onClickPlayAgain) {
    return (
        <div className="game__resultAndPlayAgain">
            <div className="game__resultMessage">IT'S A DRAW</div>
            <button onClick={onClickPlayAgain} className="game__playAgainButton">PLAY AGAIN</button>
        </div>
    );
}

export default Game;