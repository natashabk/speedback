import React from 'react';
import { Button } from 'antd';
import { useSessionValue } from '../SessionContext';

const ExitButton = () => {
	const { exitSession } = useSessionValue();
	return (
		<Button shape='circle' icon='close' onClick={exitSession} size='small' />
	);
};

export default ExitButton;
