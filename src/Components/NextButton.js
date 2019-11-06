import React from 'react';
import { Button } from 'antd';
import { pageInstructions, allRadius } from '../Constants';
import { useSessionValue } from '../SessionContext';

const NextButton = () => {
	const { active, setActive, nextRound } = useSessionValue();
	const continueText = pageInstructions[active].continueText;
	const nextScreen = pageInstructions[active].nextScreen;

	return (
		<Button
			size='large'
			type='primary'
			onClick={() => {
				nextRound();
				setActive(nextScreen);
			}}
			block
			style={{ borderRadius: allRadius, height: 50 }}
		>
			{continueText}
		</Button>
	);
};

export default NextButton;
