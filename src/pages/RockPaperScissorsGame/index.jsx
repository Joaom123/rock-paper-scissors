import React, {useEffect, useState} from "react";
import {Game, Header, Rules} from "../../components";
import "./index.css";

function RockPaperScissorsGame({}) {
    const [score, setScore] = useState(15);
    const [selectedHand, setSelectedHand] = useState("");
    const [selectedHandByMachine, setSelectedHandByMachine] = useState("");

    const handleClickOnHand = type => setSelectedHand(type);

    useEffect(() => {
        if (selectedHand === "")
            return ;

        const timer = setTimeout(() => {
            setSelectedHandByMachine("rock");
        }, 2000);
        return () => clearTimeout(timer);

        //TODO: Calcular vencedor
    }, [selectedHand]);

    return (
        <div className="container">
            <Header score={score}/>
            <Game
                onClick={handleClickOnHand}
                selectedHand={selectedHand}
                selectedHandByMachine={selectedHandByMachine}
            />
            <Rules />
        </div>
    );
}

export default RockPaperScissorsGame;
