import React from 'react';
import { Button } from 'antd';
import { pageInstructions, allRadius } from './Constants';

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
			style={{
				borderRadius: allRadius,
				height: 50,
			}}
		>
			{continueText}
		</Button>
	);
};

export default NextButton;
