import React, { useEffect, useState } from 'react'
import { Game, Header, Rules } from '../../components'
import './index.css'
import game from '../../service/gameLogic'

//TODO change type of game
function RockPaperScissorsGame({ typeOfGame = 'classic' }) {
	const [score, setScore] = useState(0)
	const [selectedHand, setSelectedHand] = useState('')
	const [selectedHandByMachine, setSelectedHandByMachine] = useState('')

	const handleClickHand = (type) => setSelectedHand(type)

	const handleClickPlayAgain = () => {
		setSelectedHand('')
		setSelectedHandByMachine('')
	}

	useEffect(() => {
		if (!handWasSelected(selectedHand)) return

		//TODO: Try a ml rock-paper-scissors
		const timer = setTimeout(() => {
			let handId = Math.floor(Math.random() * 3)

			if (handId === 0) setSelectedHandByMachine('paper')

			if (handId === 1) setSelectedHandByMachine('rock')

			if (handId === 2) setSelectedHandByMachine('scissors')
		}, 1000)

		return () => clearTimeout(timer)
	}, [selectedHand])

	useEffect(() => {
		if (
			handWasSelected(selectedHand) &&
			handWasSelected(selectedHandByMachine)
		) {
			let result = game({
				playerHand: selectedHand,
				machineHand: selectedHandByMachine,
			})

			// If 1, increase score
			if (result === 1) {
				setScore(score + 1) //Todo: Save the score after refresh && A button to reset the score
			}
		}
	}, [selectedHand, selectedHandByMachine])

	return (
		<div className="container">
			<Header score={score} />
			<Game
				onClickHand={handleClickHand}
				onClickPlayAgain={handleClickPlayAgain}
				selectedHand={selectedHand}
				selectedHandByMachine={selectedHandByMachine}
			/>
			<Rules />
		</div>
	)
}

const handWasSelected = (hand) => hand !== ''

export default RockPaperScissorsGame
