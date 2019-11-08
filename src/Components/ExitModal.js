import React from 'react';
import { Typography, Modal } from 'antd';
import { useSessionValue } from '../SessionContext';

const { Text } = Typography;

const ExitModal = ({ visible, setVisible }) => {
	const { exitSession } = useSessionValue();
	return (
		<Modal
			visible={visible}
			onCancel={() => setVisible(false)}
			onOk={() => {
				setVisible(false);
				exitSession();
			}}
			style={{ maxWidth: 360 }}
		>
			<Text>
				<span style={{ fontWeight: 600, fontSize: 16 }}>Exit session?</span>
				<br />
				<br />
				Are you sure you want to exit this session? All progress will be lost!
			</Text>
		</Modal>
	);
};
export default ExitModal;
