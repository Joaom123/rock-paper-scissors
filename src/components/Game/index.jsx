import React from 'react'
import './index.css'
import bgTriangle from '../../assets/img/bg-triangle.svg'
import { Hand } from '../index'
import { getResultMessage } from '../../utils'

function Game({
	onClickHand,
	selectedHand,
	selectedHandByMachine,
	onClickPlayAgain,
	result = 0,
}) {
	if (selectedHand)
		return (
			<ChosenHand
				selectedHand={selectedHand}
				selectedHandByMachine={selectedHandByMachine}
				onClickPlayAgain={onClickPlayAgain}
				result={result}
			/>
		)

	return <InitialGame onClick={onClickHand} />
}

function ChosenHand({
	selectedHand,
	selectedHandByMachine,
	onClickPlayAgain,
	result,
}) {
	return (
		<section className="game game--afterPlaying">
			<Hand type={selectedHand} />
			<ResultAndPlayAgain onClickPlayAgain={onClickPlayAgain} result={result} />
			<Hand type={selectedHandByMachine} />
		</section>
	)
}

function ResultAndPlayAgain({ onClickPlayAgain, result }) {
	return (
		<div className="game__resultAndPlayAgain">
			<div className="game__resultMessage" data-testid="result-message">
				{getResultMessage(result)}
			</div>
			<button
				onClick={() => onClickPlayAgain()}
				className="game__playAgainButton"
				data-testid="play-again-button"
			>
				PLAY AGAIN
			</button>
		</div>
	)
}

function InitialGame({ onClick }) {
	return (
		<section
			className="game game--initial"
			style={{ backgroundImage: `url(${bgTriangle})` }}
			data-testid="initial-game"
		>
			<Hand type="paper" onClick={onClick} />
			<Hand type="scissors" onClick={onClick} />
			<Hand type="rock" onClick={onClick} lastInTriangle />
		</section>
	)
}

export default Game
