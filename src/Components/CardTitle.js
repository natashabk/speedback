import React, { useState } from 'react';
import { Row } from 'antd';
import BackButton from './BackButton';
import ExitButton from './ExitButton';
import ExitModal from './ExitModal';
import { pageInstructions } from '../Constants';
import { useSessionValue } from '../SessionContext';
import { topRowStyle } from '../styles';

const CardTitle = ({ timeRunning }) => {
	const [visible, setVisible] = useState(false);
	const { active, isLastRound } = useSessionValue();

	const roundText = () =>
		isLastRound && !timeRunning
			? '🤝 Session Complete'
			: '🔥 Round in Progress';
	return (
		<>
			<Row type='flex' justify='space-between' style={{ zIndex: 2 }}>
				{active !== 'Settings' && <BackButton />}
				{active !== 'Settings' && <ExitButton setVisible={setVisible} />}
			</Row>
			<Row
				style={
					active === 'Settings'
						? topRowStyle
						: { ...topRowStyle, marginTop: -23 }
				}
			>
				{active === 'Round' ? roundText() : pageInstructions[active].title}
			</Row>
			<ExitModal visible={visible} setVisible={setVisible} />
		</>
	);
};

export default CardTitle;
