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

	it('should ', function () {})
})
