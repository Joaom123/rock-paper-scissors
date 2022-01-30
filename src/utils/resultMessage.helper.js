import { RESULT_ENUM } from '../constants'

export default function getResultMessage(result) {
	const resultMessage = {
		[RESULT_ENUM.WIN]: 'YOU WIN',
		[RESULT_ENUM.DRAW]: "IT'S A DRAW",
		[RESULT_ENUM.LOSE]: 'YOU LOSE',
	}

	return resultMessage[result]
}
