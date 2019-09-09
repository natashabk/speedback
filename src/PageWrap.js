import React, { useState } from 'react';
import { Typography, Row, Button, Modal } from 'antd';
import { pageInstructions, mainStyle } from './Constants';

const { Title, Text } = Typography;
const blue = { color: '#1890ff' };

const PageWrap = ({
	currentRound,
	active,
	setActive,
	numOfRounds,
	setCurrentRound,
	setPeople,
	children,
}) => {
	const [visible, setVisible] = useState(false);

	const instruction = pageInstructions[active].title;

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
			<Text style={{ fontSize: 17, color: '#b3b3b3' }}>{instruction}</Text>
			<section style={mainStyle}>{children}</section>
			<Modal
				visible={visible}
				onCancel={() => setVisible(false)}
				onOk={() => {
					setVisible(false);
					setActive('Settings');
					setCurrentRound(0);
					setPeople([]);
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

export default PageWrap;
