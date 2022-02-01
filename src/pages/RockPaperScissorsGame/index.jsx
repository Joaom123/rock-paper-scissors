import React, { useEffect, useState } from 'react'
import { Game, Header, Rules } from '../../components'
import './index.css'
import { play } from '../../services'
import { RESULT_ENUM } from '../../constants'

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

	useEffect(() => setScore(getScoreFromLocalStorage()))

	useEffect(() => {
		if (handWasSelected(selectedHand)) {
			const { result, handSelectedByMachine } = play(selectedHand)
			setSelectedHandByMachine(handSelectedByMachine)
			setResult(result)

			if (result === RESULT_ENUM.WIN) {
				setScore(score + 1)
				setScoreIntoLocalStorage(score + 1)
			}

			if (result === RESULT_ENUM.LOSE) {
				setScore(score - 1)
				setScoreIntoLocalStorage(score - 1)
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

const getScoreFromLocalStorage = () => {
	let storedValue = localStorage.getItem('score')

	if (!storedValue) return 0

	return Number(storedValue)
}

const setScoreIntoLocalStorage = (score) => localStorage.setItem('score', score)

export default RockPaperScissorsGame
