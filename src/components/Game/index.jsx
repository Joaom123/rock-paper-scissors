import React from "react";
import "./index.css";
import {IconRock, IconPaper, IconScissors} from "../../assets";
import bgTriangle from "../../assets/img/bg-triangle.svg";

function Game({onClick, selectedHand, selectedHandByMachine}) {
    if(selectedHand)
        return <ChosenHand selectedHand={selectedHand} selectedHandByMachine={selectedHandByMachine}/>;

    return <InitialGame onClick={onClick} />;
}

export default Game;

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

function Hand({type, onClick = () => {}, lastInTriangle = false}) {
    if(!type)
        return null;

    const additionalClassName = `game__hand--${type} ${lastInTriangle ? "game__hand--lastInTriangle" : ""}`;

    return(
        <div
            className={`game__hand ${additionalClassName}`}
            onClick={() => onClick(type)}
        >
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