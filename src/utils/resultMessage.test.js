import { getResultMessage } from './index'
import { RESULT_ENUM } from '../constants'

describe('Result Message Helper', () => {
	it('should return YOU WIN if result is Win', () => {
		const message = getResultMessage(RESULT_ENUM.WIN)

		expect(message).toBe('YOU WIN')
	})

	it("should return IT'S A DRAW if result is Draw", () => {
		const message = getResultMessage(RESULT_ENUM.DRAW)

		expect(message).toBe("IT'S A DRAW")
	})

	it('should return YOU LOSE if result is Lose', () => {
		const message = getResultMessage(RESULT_ENUM.LOSE)

		expect(message).toBe('YOU LOSE')
	})
})
