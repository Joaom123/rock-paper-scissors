import { IconPaper, IconRock, IconScissors } from '../../assets'
import React from 'react'
import './index.css'

function Hand({ type, onClick = () => {}, lastInTriangle = false }) {
	if (!type) return <HandWithoutType />

	const additionalClassName = `game__hand--${type} ${
		lastInTriangle ? 'game__hand--lastInTriangle' : ''
	}`.trim()

	return (
		<div
			className={`game__hand ${additionalClassName}`}
			onClick={() => onClick(type)}
			data-testid="hand-withType"
		>
			<div
				className={`game__handIcon game__handIcon--${type}`}
				data-testid="hand-icon"
			>
				<Icon type={type} />
			</div>
		</div>
	)
}

function HandWithoutType() {
	return (
		<div
			className="game__hand game__hand--withoutType"
			data-testid="hand-withoutType"
		/>
	)
}

function Icon({ type }) {
	const icon = {
		rock: <IconRock />,
		scissors: <IconScissors />,
		paper: <IconPaper />,
	}

	return icon[type]
}

export default Hand
