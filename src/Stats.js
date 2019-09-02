import React, { useState } from 'react';
import { Statistic, Typography, Row, Button, Col, Card } from 'antd';
import { titleStyle } from './Constants';

const { Title } = Typography;
const { Countdown } = Statistic;

const Stats = ({ pairTime, people, currentRound, isEven }) => {
	const [deadline, setDeadline] = useState(Date.now());
	const totalPairTime = Date.now() + 1000 * 60 * pairTime;

	const numOfRounds = () => {
		if (people.length && isEven) return people.length - 1;
		else if (people.length) return people.length;
		else return 0;
	};

	const start = () => {
		setDeadline(totalPairTime);
	};

	const restart = () => {
		setDeadline(Date.now());
	};

	return (
		<Row style={{ textAlign: 'center' }}>
			<Row gutter={8}>
				<Col span={12}>
					<Card>
						<Statistic
							title={
								<Title level={4} style={titleStyle}>
									Rounds Left
								</Title>
							}
							value={numOfRounds() - currentRound}
							precision={0}
							valueStyle={{ fontWeight: 600, color: '#1890ff' }}
						/>
					</Card>
				</Col>
				<Col span={12}>
					<Card>
						<Countdown
							title={
								<Title level={4} style={titleStyle}>
									Time Remaining
								</Title>
							}
							value={deadline}
							valueStyle={{ fontWeight: 600, color: '#faad14' }}
							format="mm:ss"
						/>
					</Card>
				</Col>
			</Row>
			<Row style={{ marginTop: 10 }}>
				<Button
					type="primary"
					size="large"
					onClick={start}
					disabled={currentRound === numOfRounds()}
					style={{ marginRight: 5 }}
				>
					{currentRound > 0 ? 'Next Round' : 'Start'}
				</Button>
				<Button size="large" onClick={restart} style={{ marginLeft: 5 }}>
					Start Over
				</Button>
			</Row>
		</Row>
	);
};
export default Stats;
