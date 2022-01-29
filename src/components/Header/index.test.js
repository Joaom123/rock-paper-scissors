import React from 'react'
import Header from './index'
import { render, screen } from '@testing-library/react'

describe('Header', () => {
	it('should render correctly with Logo and Score', () => {
		render(<Header score={0} />)
		expect(screen.queryByTestId('header')).toBeTruthy()
	})

	it('should render logo', function () {
		render(<Header score={0} />)
		expect(screen.queryByTestId('header-logo')).toHaveTextContent('logo.svg')
	})

	it('should have initial score equals zero', function () {
		render(<Header score={0} />)
		expect(screen.getByTestId('header-score-value')).toHaveTextContent('0')
	})

	it('should change value of score if props change', function () {
		const { rerender } = render(<Header score={0} />)
		expect(screen.getByTestId('header-score-value')).toHaveTextContent('0')
		rerender(<Header score={1} />)
		expect(screen.getByTestId('header-score-value')).toHaveTextContent('1')
	})
})
