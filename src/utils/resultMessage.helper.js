export default function getResultMessage(result) {
	const resultMessage = {
		1: 'YOU WIN',
		0: "IT'S A DRAW",
		'-1': 'YOU LOSE',
	}

	return resultMessage[result]
}
