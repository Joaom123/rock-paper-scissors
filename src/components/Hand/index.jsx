import { IconPaper, IconRock, IconScissors } from '../../assets'
import React from 'react'
import './index.css'

function Hand({
	type,
	onClick = () => {},
	lastInTriangle = false,
	selected = false,
}) {
	if (!type) return <HandWithoutType />

	const additionalClassName = `game__hand--${type} ${
		lastInTriangle ? 'game__hand--lastInTriangle' : ''
	} ${selected ? 'game__hand--selected' : ''}`.trim()

	return (
		<div
			className={`game__hand ${additionalClassName}`}
			onClick={() => onClick(type)}
			data-testid={`hand-type-${type}`}
		>
			<div
				className={`game__handIcon game__handIcon--${type} ${
					selected ? 'game__handIcon--selected' : ''
				}`}
				data-testid={`hand-icon-${type}`}
			>
				<div
					className={`${
						selected ? 'handIcon__icon--selected' : 'handIcon__icon'
					}`}
				>
					<Icon type={type} />
				</div>
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
