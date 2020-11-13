import React, {useEffect, useState} from "react";
import {Game, Header, Rules} from "../../components";
import "./index.css";

function RockPaperScissorsGame({}) {
    const [score, setScore] = useState(15);
    const [selectedHand, setSelectedHand] = useState("");
    const [selectedHandByMachine, setSelectedHandByMachine] = useState("");

    const handleClickOnHand = type => setSelectedHand(type);

    useEffect(() => {
        if (!handWasSelected(selectedHand))
            return ;

        //Timeout para selecionar a mão da máquina
        const timer = setTimeout(() => {
            setSelectedHandByMachine("rock");
        }, 2000);
        return () => clearTimeout(timer);

    }, [selectedHand]);

    return (
        <div className="container">
            <Header score={score}/>
            <Game
                onClick={handleClickOnHand}
                selectedHand={selectedHand}
                selectedHandByMachine={selectedHandByMachine}
            />
            {/*TODO: Mensagem vitória/derrota/empate*/}
            <Rules />
        </div>
    );
}

const handWasSelected = hand => hand !== "";

export default RockPaperScissorsGame;
