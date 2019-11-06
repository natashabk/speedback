import React from 'react';
import { Row } from 'antd';
import BackButton from './BackButton';
import { pageInstructions } from '../Constants';
import { useSessionValue } from '../SessionContext';

const CardTitle = ({ timeRunning }) => {
	const { active, isLastRound } = useSessionValue();

	const roundText = () =>
		isLastRound && !timeRunning
			? '✅ Session Complete'
			: '🔥 Round in Progress';

	return (
		<Row style={{ height: '10%', textAlign: 'center' }}>
			{active !== 'Settings' && <BackButton />}
			{active === 'Round' ? roundText() : pageInstructions[active].title}
		</Row>
	);
};

export default CardTitle;
