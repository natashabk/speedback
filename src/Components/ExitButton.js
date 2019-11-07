import React from 'react';
import { Button } from 'antd';
import { useSessionValue } from '../SessionContext';

const ExitButton = ({ setVisible }) => {
	const { exitSession } = useSessionValue();
	return (
		<Button shape='circle' icon='close' onClick={setVisible} size='small' />
	);
};

export default ExitButton;
