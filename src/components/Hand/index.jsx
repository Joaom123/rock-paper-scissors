import {IconPaper, IconRock, IconScissors} from "../../assets";
import React, {Fragment} from "react";
import "./index.css";

function Hand({
                  type, onClick = () => {
    }, lastInTriangle = false
              }) {

    if (!type)
        return <HandWithoutType/>;

    const additionalClassName = `game__hand--${type} ${lastInTriangle ? "game__hand--lastInTriangle" : ""}`.trim();

    return (
        <div
            className={`game__hand ${additionalClassName}`}
            onClick={() => onClick(type)}
        >
            <div className={`game__handIcon game__handIcon--${type}`}>
                <Icon type={type}/>
            </div>
        </div>
    );
}

function HandWithoutType() {
    return <div className="game__hand game__hand--withoutType"/>;
}

function Icon({type}) {
    if (type === "rock")
        return <IconRock/>;
    if (type === "scissors")
        return <IconScissors/>;
    if (type === "paper")
        return <IconPaper/>
    return <Fragment/>;
}

export default Hand;