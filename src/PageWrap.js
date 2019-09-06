import React, { useState } from 'react';
import { Typography, Row, Button, Modal, Card } from 'antd';
import { pageInstructions } from './Constants';

const { Title, Text } = Typography;
const blue = { color: '#1890ff' };

const cardStyle = {
	minHeight: 500,
	height: 500,
	justifyContent: 'space-between',
	display: 'flex',
	flexDirection: 'column',
	padding: '0px 20px',
};

const PageWrap = ({
	currentRound,
	active,
	setActive,
	numOfRounds,
	nextRound,
	setCurrentRound,
	setPeople,
	isLastRound,
	sessionOver,
	children,
}) => {
	const [visible, setVisible] = useState(false);

	const instruction = pageInstructions[active].title;
	const continueText = pageInstructions[active].continueText;
	const nextScreen = pageInstructions[active].nextScreen;

	const getTitle = () => {
		if (active === 'Settings') return 'Welcome to Speedback!';
		if (active === 'Feedback') return 'Thank you!';
		else return null;
	};

	return (
		<>
			<Row type="flex" justify="space-between">
				<Title level={3} style={{ fontWeight: 400 }}>
					{getTitle() ? (
						getTitle()
					) : (
						<>
							Round <span style={blue}>{currentRound}</span> of {numOfRounds()}
						</>
					)}
				</Title>
				{active !== 'Settings' && (
					<Button
						shape="circle"
						icon="close"
						onClick={() => setVisible(true)}
					/>
				)}
			</Row>
			<Title
				level={4}
				style={{ fontWeight: 400, marginTop: 0, color: '#b3b3b3' }}
			>
				{instruction}
			</Title>
			<Card style={{ minHeight: 500 }} bodyStyle={cardStyle}>
				<section style={{ height: 400 }}>{children}</section>
				{isLastRound && active === 'Round' ? (
					<Button
						size="large"
						type="primary"
						style={{ marginBottom: 10 }}
						onClick={() => {
							setActive('Feedback');
							setCurrentRound(0);
							setPeople([]);
						}}
						block
					>
						{sessionOver ? 'Submit Feedback' : 'End Session'}
					</Button>
				) : (
					<Button
						size="large"
						type="primary"
						style={{ marginBottom: 10 }}
						onClick={() => {
							nextRound();
							setActive(nextScreen);
						}}
						block
					>
						{continueText}
					</Button>
				)}
			</Card>
			<Modal
				visible={visible}
				onCancel={() => setVisible(false)}
				onOk={() => {
					setVisible(false);
					setActive('Settings');
					setCurrentRound(0);
					setPeople([]);
				}}
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

export default PageWrap;
