import React from 'react';
import { Button } from 'antd';
import { pageInstructions } from './Constants';

const NextButton = ({
	active,
	isLastRound,
	sessionOver,
	setActive,
	setCurrentRound,
	setPeople,
	nextRound,
}) => {
	const continueText = pageInstructions[active].continueText;
	const nextScreen = pageInstructions[active].nextScreen;

	return (
		<Button
			size="large"
			type="primary"
			onClick={() => {
				setActive(nextScreen);
				nextRound();
			}}
			block
		>
			{continueText}
		</Button>
	);
};

export default NextButton;
