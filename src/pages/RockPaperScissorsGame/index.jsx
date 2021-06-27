import React, {useEffect, useState} from "react";
import {Game, Header, Rules} from "../../components";
import "./index.css";

//TODO change type of game
function RockPaperScissorsGame({typeOfGame = "classic"}) {
    const [score, setScore] = useState(0);
    const [selectedHand, setSelectedHand] = useState("");
    const [selectedHandByMachine, setSelectedHandByMachine] = useState("");

    const handleClickHand = type => setSelectedHand(type);

    const handleClickPlayAgain = () => {
        setSelectedHand("");
        setSelectedHandByMachine("");
    }

    useEffect(() => {
        if (!handWasSelected(selectedHand))
            return;

        const timer = setTimeout(() => {
            setSelectedHandByMachine("rock");
        }, 1000);

        return () => clearTimeout(timer);
    }, [selectedHand]);

    useEffect(() => {
        if (handWasSelected(selectedHand) && handWasSelected(selectedHandByMachine))
            return;

        //TODO Game logic goes here
    }, [selectedHand, selectedHandByMachine]);

    return (
        <div className="container">
            <Header score={score}/>
            <Game
                onClickHand={handleClickHand}
                onClickPlayAgain={handleClickPlayAgain}
                selectedHand={selectedHand}
                selectedHandByMachine={selectedHandByMachine}
            />
            <Rules/>
        </div>
    );
}

const handWasSelected = hand => hand !== "";

export default RockPaperScissorsGame;
