import React from 'react';
import { Button } from 'antd';

const ExitButton = ({ setVisible }) => {
	return (
		<Button
			shape='circle'
			icon='close'
			onClick={() => setVisible(true)}
			size='small'
		/>
	);
};

export default ExitButton;
