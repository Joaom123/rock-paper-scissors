import { play } from './index'
import { HAND_ENUM } from '../constants'

describe('Play Helper', () => {
	it('should return result -1 if player selected rock and machine paper', () => {
		const result = play(HAND_ENUM.ROCK, HAND_ENUM.PAPER)

		expect(result).toBe(-1)
	})

	it('should return result 0 if player selected rock and machine rock', () => {
		const result = play(HAND_ENUM.ROCK, HAND_ENUM.ROCK)

		expect(result).toBe(0)
	})

	it('should return result -1 if player selected rock and machine paper', () => {
		const result = play(HAND_ENUM.ROCK, HAND_ENUM.SCISSORS)

		expect(result).toBe(1)
	})

	it('should return result -1 if player selected paper and machine paper', () => {
		const result = play(HAND_ENUM.PAPER, HAND_ENUM.PAPER)

		expect(result).toBe(0)
	})

	it('should return result -1 if player selected paper and machine rock', () => {
		const result = play(HAND_ENUM.PAPER, HAND_ENUM.ROCK)

		expect(result).toBe(1)
	})

	it('should return result -1 if player selected paper and machine scissors', () => {
		const result = play(HAND_ENUM.PAPER, HAND_ENUM.SCISSORS)

		expect(result).toBe(-1)
	})

	it('should return result -1 if player selected scissors and machine paper', () => {
		const result = play(HAND_ENUM.PAPER, HAND_ENUM.PAPER)

		expect(result).toBe(0)
	})

	it('should return result -1 if player selected scissors and machine rock', () => {
		const result = play(HAND_ENUM.PAPER, HAND_ENUM.ROCK)

		expect(result).toBe(1)
	})

	it('should return result -1 if player selected scissors and machine scissors', () => {
		const result = play(HAND_ENUM.PAPER, HAND_ENUM.SCISSORS)

		expect(result).toBe(-1)
	})
})
