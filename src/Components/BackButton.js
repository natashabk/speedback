import React from 'react';
import { Button } from 'antd';
import { pageInstructions } from '../Constants';

const BackButton = ({ active, setActive }) => {
	const prevScreen = pageInstructions[active].prevScreen;
	return (
		<Button
			shape='circle'
			icon='arrow-left'
			onClick={() => setActive(prevScreen)}
		/>
	);
};

export default BackButton;
