import React, {Fragment} from "react";
import {Game} from "../../components";

function RockPaperScissorsGame({}) {

    return (
        <Fragment>
            <Head />
            <Game />
            <Rules />
        </Fragment>
    );
}

export default RockPaperScissorsGame;

function Head({}) {
    return (
        <article className="">
            <header>
                <h1>ROCK PAPER SCISSORS</h1>
            </header>
            <div className="score">

            </div>
        </article>
    );
}

function Rules({}) {
    return (
        <section className="rules">

        </section>
    );
}