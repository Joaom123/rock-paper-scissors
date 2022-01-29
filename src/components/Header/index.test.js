import React from 'react'
import Header from './index'
import { cleanup, queryByTestId, render } from '@testing-library/react'

describe('Header', () => {
	let component

	beforeEach(() => {
		cleanup()
		component = render(<Header score={0} />)
	})

	it('should render correctly with Logo and Score', () => {
		let header = component.container
		expect(queryByTestId(header, 'header')).toBeTruthy()
	})

	it('should render logo', function () {
		let header = component.container
		expect(queryByTestId(header, 'header-logo')).toHaveTextContent('logo.svg')
	})

	it('should have initial score equals zero', function () {
		let header = component.container
		expect(queryByTestId(header, 'header-score')).toHaveTextContent('0')
	})
})
