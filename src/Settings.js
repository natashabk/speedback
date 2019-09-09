import React from 'react';
import { Typography, Select, Radio } from 'antd';
import NextButton from './NextButton';

const { Text } = Typography;
const radioStyle = { width: '33%', textAlign: 'center', height: 40 };

const Settings = ({
	people,
	setPeople,
	pairTime,
	setPairTime,
	numOfRounds,
	setActive,
	nextRound,
}) => {
	const sessionLength = Math.floor(
		numOfRounds() * pairTime + numOfRounds() * 0.5,
	);

	return (
		<>
			<Select
				mode="tags"
				size="large"
				rows={4}
				placeholder={
					<Text style={{ textTransform: 'initial', color: '#b3b3b3' }}>
						Press enter after each name
					</Text>
				}
				onChange={present => setPeople(present)}
				value={people}
				style={{
					textTransform: 'capitalize',
					width: '100%',
				}}
				dropdownRender={menu => <div style={{ display: 'none' }}>{menu}</div>}
			/>
			<label style={{ display: 'grid', marginTop: 20 }}>
				<Text strong>Minutes per pair</Text>
				<Radio.Group
					buttonStyle="solid"
					onChange={e => setPairTime(e.target.value)}
					defaultValue={pairTime}
				>
					{[3, 4, 5].map(num => (
						<Radio.Button key={num} value={num} style={radioStyle}>
							{`${num}`}
						</Radio.Button>
					))}
				</Radio.Group>
				{people.length !== 0 && (
					<Text type="secondary">
						This session will last approximately {sessionLength} minutes.
					</Text>
				)}
			</label>
			<NextButton
				active="Settings"
				setActive={setActive}
				nextRound={nextRound}
			/>
		</>
	);
};

export default Settings;
