import React from 'react';
import { Row } from 'antd';
import BackButton from './BackButton';
import ExitButton from './ExitButton';
import { pageInstructions } from '../Constants';
import { useSessionValue } from '../SessionContext';

const CardTitle = ({ timeRunning }) => {
	const { active, isLastRound } = useSessionValue();

	const roundText = () =>
		isLastRound && !timeRunning
			? '✅ Session Complete'
			: '🔥 Round in Progress';

	return (
		<>
			<Row type='flex' justify='space-between' style={{ zIndex: 2 }}>
				{active !== 'Settings' && <BackButton />}
				{active !== 'Settings' && <ExitButton />}
			</Row>
			<Row style={{ height: '10%', textAlign: 'center', marginTop: -23 }}>
				{active === 'Round' ? roundText() : pageInstructions[active].title}
			</Row>
		</>
	);
};

export default CardTitle;
