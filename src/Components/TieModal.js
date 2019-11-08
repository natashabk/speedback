import React from 'react';
import { Typography, Modal, Button } from 'antd';

const { Text } = Typography;

const TieModal = ({ visible, setVisible }) => {
	return (
		<Modal
			visible={visible}
			footer={null}
			onCancel={() => setVisible(false)}
			style={{ maxWidth: 360 }}
		>
			<Text>
				<span style={{ fontWeight: 600, fontSize: 16 }}>
					How to solve a tie
				</span>
				<br />
				<br />
				If the question results in a tie, you can break the deadlock using one
				of these methods:
				<br />
				<br />
				✂️ Rock, paper, scissors <br />
				💰 Flip a coin <br />
				💪 Arm wrestle <br />
				☠️ Fight to the death <br />
			</Text>
			<br />
			<Button
				onClick={() => setVisible(false)}
				type='primary'
				style={{ marginTop: 15, width: '100%' }}
			>
				OK
			</Button>
		</Modal>
	);
};
export default TieModal;
