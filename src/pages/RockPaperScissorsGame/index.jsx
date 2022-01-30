import React, { useEffect, useState } from 'react'
import { Game, Header, Rules } from '../../components'
import './index.css'
import { play } from '../../services'
import { RESULT_ENUM } from '../../constants'

//TODO change type of game
function RockPaperScissorsGame({ typeOfGame = 'classic' }) {
	const [score, setScore] = useState(0)
	const [result, setResult] = useState(0)
	const [selectedHand, setSelectedHand] = useState('')
	const [selectedHandByMachine, setSelectedHandByMachine] = useState('')

	const handleClickHand = (type) => setSelectedHand(type)

	const handleClickPlayAgain = () => {
		setSelectedHand('')
		setSelectedHandByMachine('')
	}

	useEffect(() => {
		if (handWasSelected(selectedHand)) {
			const { result, handSelectedByMachine } = play(selectedHand)
			setSelectedHandByMachine(handSelectedByMachine)
			setResult(result)

			if (result === RESULT_ENUM.WIN) {
				setScore(score + 1)
			}

			if (result === RESULT_ENUM.LOSE) {
				setScore(score - 1)
			}
		}
	}, [selectedHand])

	return (
		<div className="container" data-testid="classic-game">
			<Header score={score} />
			<Game
				onClickHand={handleClickHand}
				onClickPlayAgain={handleClickPlayAgain}
				selectedHand={selectedHand}
				selectedHandByMachine={selectedHandByMachine}
				result={result}
			/>
			<Rules />
		</div>
	)
}

const handWasSelected = (hand) => hand !== ''

export default RockPaperScissorsGame
