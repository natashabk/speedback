import React from 'react';
import { Button } from 'antd';
import { pageInstructions } from '../Constants';
import { useSessionValue } from '../SessionContext';
import { allRadius } from '../styles';

const NextButton = ({ setError }) => {
	const { active, setActive, nextRound, people } = useSessionValue();
	const continueText = pageInstructions[active].continueText;
	const nextScreen = pageInstructions[active].nextScreen;
	return (
		<Button
			size='large'
			type='primary'
			onClick={() => {
				if (people.length > 1) {
					nextRound();
					setActive(nextScreen);
				} else setError(true);
			}}
			block
			style={{ borderRadius: allRadius, height: 50 }}
		>
			{continueText}
		</Button>
	);
};

export default NextButton;
