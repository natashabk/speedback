import React, { useState } from 'react';
import { Typography, Row, Button, Modal, Icon } from 'antd';
import { pageInstructions, newColors } from '../Constants';
import { ReactComponent as Logo } from '../Images/Logo-White.svg';
import { useSessionValue } from '../SessionContext';

const { Title, Text } = Typography;
const blue = { color: '#1890ff' };

const PageHeader = () => {
	const [visible, setVisible] = useState(false);

	const {
		currentRound,
		active,
		setActive,
		numOfRounds,
		setCurrentRound,
		exitSession,
	} = useSessionValue();

	const instruction = pageInstructions[active].title;

	const getTitle = () => {
		if (active === 'Settings') return 'speedback';
		if (active === 'Feedback') return 'Thank you!';
		else return null;
	};

	return (
		<>
			<Row style={{ textAlign: 'center' }}>
				<Title
					level={2}
					style={{
						letterSpacing: 4,
						color: '#fff',
					}}
				>
					{getTitle() ? (
						getTitle()
					) : (
						<>
							round {currentRound} of {numOfRounds}
						</>
					)}
					{active === 'Settings' && (
						<Icon
							style={{ width: 30, marginLeft: 10 }}
							component={() => <Logo />}
						/>
					)}
				</Title>
				{/* {active !== 'Settings' && (
					<Button
						shape="circle"
						icon="close"
						style={{ color: '#555353', border: '1px solid #555353' }}
						onClick={() => setVisible(true)}
					/>
				)} */}
			</Row>
			{/* <Text style={{ fontSize: 17, color: newColors.indigo }}>
				
				{instruction}
			</Text> */}
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
		</>
	);
};

export default PageHeader;
