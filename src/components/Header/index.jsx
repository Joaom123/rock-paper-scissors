import React from 'react'
import './index.css'
import { Logo } from '../../assets'

function Header({ score }) {
	return (
		<article className="header" data-testid="header">
			<Logo className="header__title" data-testid="header-logo" />
			<div className="headerScore">
				<span className="headerScore__title">SCORE</span>
				<span className="headerScore__score" data-testid="header-score">
					{score}
				</span>
			</div>
		</article>
	)
}

export default Header
