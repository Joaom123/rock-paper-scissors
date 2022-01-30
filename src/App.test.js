import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
	it('should be rendered', () => {
		render(<App />)

		expect(screen.getByTestId('classic-game')).toBeTruthy()
	})
})
