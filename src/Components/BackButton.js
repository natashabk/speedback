import React from 'react';
import { Button } from 'antd';
import { pageInstructions } from '../Constants';
import { useSessionValue } from '../SessionContext';

const BackButton = () => {
	const { active, setActive, currentRound, prevRound } = useSessionValue();

	const prevScreen = () => {
		if (active === 'Pairs' && currentRound > 1) {
			prevRound();
			return 'Round';
		} else return pageInstructions[active].prevScreen;
	};
	return (
		<Button
			shape='circle'
			icon='arrow-left'
			onClick={() => setActive(prevScreen())}
			size='small'
		/>
	);
};

export default BackButton;
