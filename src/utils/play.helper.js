import { HAND_ENUM, RESULT_ENUM } from '../constants'

export default function play(playerHand, machineHand) {
	let result

	if (playerHand === HAND_ENUM.ROCK) {
		let handsOptions = {
			[HAND_ENUM.ROCK]: RESULT_ENUM.DRAW,
			[HAND_ENUM.SCISSORS]: RESULT_ENUM.WIN,
			[HAND_ENUM.PAPER]: RESULT_ENUM.LOSE,
		}
		result = handsOptions[machineHand]
	}

	if (playerHand === HAND_ENUM.SCISSORS) {
		let handsOptions = {
			[HAND_ENUM.ROCK]: RESULT_ENUM.LOSE,
			[HAND_ENUM.SCISSORS]: RESULT_ENUM.DRAW,
			[HAND_ENUM.PAPER]: RESULT_ENUM.WIN,
		}
		result = handsOptions[machineHand]
	}

	if (playerHand === HAND_ENUM.PAPER) {
		let handsOptions = {
			[HAND_ENUM.ROCK]: RESULT_ENUM.WIN,
			[HAND_ENUM.SCISSORS]: RESULT_ENUM.LOSE,
			[HAND_ENUM.PAPER]: RESULT_ENUM.DRAW,
		}
		result = handsOptions[machineHand]
	}

	return result
}
