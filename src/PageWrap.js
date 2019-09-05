import React, { useState } from 'react';
import { Typography, Row, Button, Modal, Card } from 'antd';
import { pageInstructions } from './Constants';

const { Title, Text } = Typography;
const blue = { color: '#1890ff' };

const PageWrap = ({
	currentRound,
	active,
	setActive,
	numOfRounds,
	children,
}) => {
	const [visible, setVisible] = useState(false);

	const instruction = pageInstructions[active].title;
	const continueText = pageInstructions[active].continueText;
	const nextScreen = pageInstructions[active].nextScreen;
	const title = active === 'Settings' ? 'Welcome to Speedback!' : null;

	return (
		<>
			<Row type="flex" justify="space-between">
				<Title level={3} style={{ fontWeight: 400 }}>
					{title ? (
						title
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
			<Card
				style={{ minHeight: 500 }}
				bodyStyle={{
					minHeight: 500,
					height: 500,
					justifyContent: 'space-between',
					display: 'flex',
					flexDirection: 'column',
					padding: '0px 20px',
				}}
			>
				<section style={{ height: 400 }}>{children}</section>
				<Button
					size="large"
					type="primary"
					style={{ marginBottom: 10 }}
					onClick={() => setActive(nextScreen)}
					block
				>
					{continueText}
				</Button>
			</Card>
			<Modal
				visible={visible}
				onCancel={() => setVisible(false)}
				onOk={() => {
					setVisible(false);
					setActive('Settings');
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
