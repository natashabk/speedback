import React from 'react';
import { Typography, Card, Col, Select, Radio, Button } from 'antd';
import './App.css';
import { titleStyle } from './Constants';

const { Title, Text } = Typography;

const radioStyle = { width: '33%', textAlign: 'center' };

const Settings = ({ people, setPeople, pairTime, setPairTime }) => {
	const sessionLength = Math.floor(
		people.length * pairTime + people.length / 2,
	);

	return (
		<Col span={12}>
			<Card style={{ maxWidth: 400, minHeight: 350 }}>
				<Title level={4} style={titleStyle}>
					Participants
				</Title>
				<Select
					mode="tags"
					placeholder="Start typing names..."
					onChange={present => setPeople(present)}
					value={people}
					style={{ textTransform: 'capitalize', width: '100%' }}
				/>
				<Col
					style={{ flexDirection: 'column', display: 'flex', marginTop: 10 }}
				>
					Minutes per pair
					<Radio.Group
						defaultValue={4}
						buttonStyle="solid"
						onChange={e => setPairTime(e.target.value)}
					>
						{[3, 4, 5].map(num => (
							<Radio.Button value={num} style={radioStyle}>
								{`${num}`}
							</Radio.Button>
						))}
					</Radio.Group>
					<Text type="secondary">
						This session will last approximately {sessionLength} minutes.
					</Text>
					<Button type="primary">Begin Session</Button>
				</Col>
			</Card>
		</Col>
	);
};

export default Settings;
