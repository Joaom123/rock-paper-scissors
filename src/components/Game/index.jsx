import React from "react";
import "./index.css";
import {IconRock, IconPaper, IconScissors} from "../../assets";
import bgTriangle from "../../assets/img/bg-triangle.svg";

function Game({onClick, selectedType}) {
    if(selectedType)
        return null;

    return <InitialGame onClick={onClick}/>;
}

export default Game;

function InitialGame({onClick}) {
    return (
        <section
            className="game"
            style={{backgroundImage: `url(${bgTriangle})`}}
        >
            <Hand type="paper" onClick={onClick}/>
            <Hand type="scissors" onClick={onClick}/>
            <Hand type="rock" onClick={onClick}/>
        </section>
    );
}

function Hand({type, onClick}) {
    return(
        <div className={`game__hand game__hand--${type}`} onClick={() => onClick(type)}>
            <div className={`game__handIcon game__handIcon--${type}`}>
                <Icon type={type} />
            </div>
        </div>
    );
}

function Icon({type}) {
    if(type === "rock")
        return <IconRock />;
    if(type === "scissors")
        return <IconScissors />;
    if(type === "paper")
        return <IconPaper />
}