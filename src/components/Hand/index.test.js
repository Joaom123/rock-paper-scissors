import React from 'react'
import Hand from './index'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Hand', () => {
	it('should render hand without type', () => {
		render(<Hand />)

		expect(screen.getByTestId('hand-withoutType')).toBeTruthy()
	})

	it('should render hand without type with class', () => {
		const { container } = render(<Hand />)

		expect(container.firstChild).toHaveClass(
			'game__hand game__hand--withoutType'
		)
	})

	it('should not render icon if hand is without', () => {
		render(<Hand />)

		expect(screen.queryByTestId('hand-withType')).toBeNull()
	})

	it('should have class if is lastInTriangle', () => {
		const { container } = render(<Hand type="rock" lastInTriangle />)

		expect(container.firstChild).toHaveClass('game__hand--lastInTriangle')
	})

	it('should render hand type rock', () => {
		render(<Hand type="rock" />)

		expect(screen.getByTestId('hand-type-rock')).toBeTruthy()
	})

	it('should render hand type rock with class', () => {
		const { container } = render(<Hand type="rock" />)

		expect(container.firstChild).toHaveClass('game__hand game__hand--rock')
	})

	it('should render SVG if hand has type rock', () => {
		render(<Hand type="rock" />)
		const svgWrapper = screen.getByTestId('hand-icon-rock')

		expect(svgWrapper.firstChild).toHaveTextContent('icon-rock.svg')
	})

	it('should return type on click if hand has type rock', () => {
		const handleClick = jest.fn()
		render(<Hand type="rock" onClick={handleClick} />)

		fireEvent.click(screen.getByTestId('hand-type-rock'))

		expect(handleClick).toHaveBeenCalledTimes(1)
		expect(handleClick).toHaveBeenCalledWith('rock')
	})

	it('should render hand type paper', () => {
		render(<Hand type="paper" />)

		expect(screen.getByTestId('hand-type-paper')).toBeTruthy()
	})

	it('should render SVG if hand has type paper', () => {
		render(<Hand type="paper" />)
		const svgWrapper = screen.getByTestId('hand-icon-paper')

		expect(svgWrapper.firstChild).toHaveTextContent('icon-paper.svg')
	})

	it('should render hand type paper with class', () => {
		const { container } = render(<Hand type="paper" />)

		expect(container.firstChild).toHaveClass('game__hand game__hand--paper')
	})

	it('should return type on click if hand has type paper', () => {
		const handleClick = jest.fn()
		render(<Hand type="paper" onClick={handleClick} />)

		fireEvent.click(screen.getByTestId('hand-type-paper'))

		expect(handleClick).toHaveBeenCalledTimes(1)
		expect(handleClick).toHaveBeenCalledWith('paper')
	})

	it('should render hand type scissors', () => {
		render(<Hand type="scissors" />)

		expect(screen.getByTestId('hand-type-scissors')).toBeTruthy()
	})

	it('should render SVG if hand has type scissors', () => {
		render(<Hand type="scissors" />)
		const svgWrapper = screen.getByTestId('hand-icon-scissors')

		expect(svgWrapper.firstChild).toHaveTextContent('icon-scissors.svg')
	})

	it('should render hand type scissors with class', () => {
		const { container } = render(<Hand type="scissors" />)

		expect(container.firstChild).toHaveClass('game__hand game__hand--scissors')
	})

	it('should return type on click if hand has type scissors', () => {
		const handleClick = jest.fn()
		render(<Hand type="scissors" onClick={handleClick} />)

		fireEvent.click(screen.getByTestId('hand-type-scissors'))

		expect(handleClick).toHaveBeenCalledTimes(1)
		expect(handleClick).toHaveBeenCalledWith('scissors')
	})
})
