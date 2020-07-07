import React, {useState} from "react";
import {Game, Header, Rules} from "../../components";
import "./index.css";

function RockPaperScissorsGame({}) {
    const [score, setScore] = useState(0);
    const [selectedType, setSelectedType] = useState("");

    const handleClickOnHand = type => setSelectedType(type);

    return (
        <div className="container">
            <Header score={score}/>
            <Game onClick={handleClickOnHand} selectedType={selectedType}/>
            <Rules />
        </div>
    );
}

export default RockPaperScissorsGame;
