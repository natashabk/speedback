import React from 'react';
import { Typography, Row, Button, Alert } from 'antd';
import { alerts } from './Constants';

const { Title, Text } = Typography;
const blue = { color: '#1890ff' };

const PageTitle = ({
	currentRound,
	people,
	isEven,
	instruction,
	alert,
	continueText,
	children,
}) => {
	const numOfRounds = () => {
		if (people.length && isEven) return people.length - 1;
		else if (people.length) return people.length;
		else return 0;
	};

	const alertMessage = () => (
		<Text>
			<strong>{alerts[alert].headline}</strong>
			<br />
			{alerts[alert].text}
		</Text>
	);

	return (
		<>
			<Title level={3}>
				Round <span style={blue}>{currentRound}</span> of {numOfRounds()}
			</Title>
			<Title level={4} style={{ fontWeight: 400, marginTop: 0 }}>
				{instruction}
			</Title>
			{children}
			<Row type="flex" style={{ flexDirection: 'column' }}>
				{alert && (
					<Alert
						message={alertMessage()}
						type="info"
						showIcon
						style={{ marginBottom: 10 }}
					/>
				)}
				<Button size="large" type="primary" style={{ marginBottom: 10 }}>
					{continueText}
				</Button>
				<Button size="large" type="danger" ghost>
					Exit Session
				</Button>
			</Row>
		</>
	);
};

export default PageTitle;
