import React from 'react'
import Game from './index'
import { render, screen } from '@testing-library/react'

describe('Game', () => {
	it('should render initial game', () => {
		render(<Game />)
		expect(screen.getByTestId('initial-game')).toBeTruthy()
	})
})
