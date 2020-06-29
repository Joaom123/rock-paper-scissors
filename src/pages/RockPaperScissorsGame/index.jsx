import React, {useState} from "react";
import {Game, Header, Rules} from "../../components";
import "./index.css";

function RockPaperScissorsGame({}) {
    const [score, setScore] = useState(0);

    return (
        <div className="container">
            <Header score={score}/>
            <Game />
            <Rules />
        </div>
    );
}

export default RockPaperScissorsGame;
