import React from 'react';
import { Typography, Card, Col, Select, Radio, Button } from 'antd';
import './App.css';
import { cardStyle } from './Constants';

const { Text } = Typography;

const radioStyle = { width: '33%', textAlign: 'center' };
const colStyle = {
	flexDirection: 'column',
	display: 'flex',
	marginTop: 10,
	minHeight: 'inherit',
	justifyContent: 'space-between',
	paddingTop: '5%',
};

const Settings = ({ people, setPeople, pairTime, setPairTime }) => {
	const sessionLength = Math.floor(
		people.length * pairTime + people.length / 2,
	);

	return (
		<Card style={cardStyle} title="Participants" bodyStyle={{ minHeight: 300 }}>
			<Select
				mode="tags"
				size="large"
				rows={4}
				placeholder="Start typing names..."
				onChange={present => setPeople(present)}
				value={people}
				style={{ textTransform: 'capitalize', width: '100%' }}
				dropdownRender={menu => <div style={{ display: 'none' }}>{menu}</div>}
			/>
			<Col style={colStyle}>
				<label style={{ display: 'grid' }}>
					<Text strong>Minutes per pair</Text>
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
				</label>
				<Button size="large" type="primary">
					Begin Session
				</Button>
			</Col>
		</Card>
	);
};

export default Settings;
