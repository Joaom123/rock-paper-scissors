import React from 'react'
import Game from './index'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Game', () => {
	it('should render initial game', () => {
		const { container } = render(<Game />)

		expect(screen.getByTestId('initial-game')).toBeTruthy()
		expect(container.firstChild).toHaveClass('game game--initial')
	})

	it('should render Hand of type paper', () => {
		render(<Game />)

		expect(screen.queryByTestId('hand-type-paper')).toBeTruthy()
	})

	it('should render Hand of type rock', () => {
		render(<Game />)

		expect(screen.queryByTestId('hand-type-rock')).toBeTruthy()
	})

	it('should render Hand of type scissors', () => {
		render(<Game />)

		expect(screen.queryByTestId('hand-type-scissors')).toBeTruthy()
	})

	it('should click on Hand of type rock and receive type value', () => {
		const handleClick = jest.fn()
		render(<Game onClickHand={handleClick} />)

		fireEvent.click(screen.getByTestId('hand-type-rock'))

		expect(handleClick).toHaveBeenCalledTimes(1)
		expect(handleClick).toHaveBeenCalledWith('rock')
	})

	it('should click on Hand of type paper and receive type value', () => {
		const handleClick = jest.fn()
		render(<Game onClickHand={handleClick} />)

		fireEvent.click(screen.getByTestId('hand-type-paper'))

		expect(handleClick).toHaveBeenCalledTimes(1)
		expect(handleClick).toHaveBeenCalledWith('paper')
	})

	it('should click on Hand of type scissors and receive type value', () => {
		const handleClick = jest.fn()
		render(<Game onClickHand={handleClick} />)

		fireEvent.click(screen.getByTestId('hand-type-scissors'))

		expect(handleClick).toHaveBeenCalledTimes(1)
		expect(handleClick).toHaveBeenCalledWith('scissors')
	})

	it('should render game--afterPlaying if hand was selected', () => {
		const { container } = render(<Game selectedHand="rock" />)

		expect(container.firstChild).toHaveClass('game game--afterPlaying')
	})

	it('should click on reset button if hand was selected', () => {
		const handlePlayAgainOnClick = jest.fn()
		render(
			<Game selectedHand="rock" onClickPlayAgain={handlePlayAgainOnClick} />
		)

		fireEvent.click(screen.getByTestId('play-again-button'))

		expect(handlePlayAgainOnClick).toHaveBeenCalledTimes(1)
	})

	it('should render selected hand and rerender the hand selected by machine', () => {
		const { rerender } = render(<Game selectedHand="rock" />)

		expect(screen.queryByTestId('hand-icon-rock')).toBeTruthy()
		expect(screen.queryByTestId('hand-icon-paper')).toBeFalsy()

		rerender(<Game selectedHand="rock" selectedHandByMachine="paper" />)

		expect(screen.queryByTestId('hand-icon-rock')).toBeTruthy()
		expect(screen.queryByTestId('hand-icon-paper')).toBeTruthy()
	})

	it('should render selected hand and the hand selected by machine are the same', () => {
		const { rerender } = render(<Game selectedHand="rock" />)

		expect(screen.queryByTestId('hand-icon-rock')).toBeTruthy()

		rerender(<Game selectedHand="rock" selectedHandByMachine="rock" />)

		expect(screen.queryAllByTestId('hand-icon-rock')).toHaveLength(2)
	})

	it('should render YOU WIN message if result is 1', () => {
		render(<Game selectedHand="rock" result={1} />)

		expect(screen.queryByTestId('result-message')).toHaveTextContent('YOU WIN')
	})

	it('should render ITS A DRAW message if result is 0', () => {
		render(<Game selectedHand="rock" result={0} />)

		expect(screen.queryByTestId('result-message')).toHaveTextContent(
			"IT'S A DRAW"
		)
	})

	it('should render YOU LOSE message if result is -1', () => {
		render(<Game selectedHand="rock" result={-1} />)

		expect(screen.queryByTestId('result-message')).toHaveTextContent('YOU LOSE')
	})
})
