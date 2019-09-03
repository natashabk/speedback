import React, { useState, useEffect, useRef } from 'react';
import { Statistic, Typography, Progress, Card, Row, Button } from 'antd';
import { cardStyle } from './Constants';
import PageTitle from './PageTitle';
import cron from 'node-cron';

const { Title } = Typography;
const { Countdown } = Statistic;

const Round = ({ pairTime, people, currentRound, isEven }) => {
	const [timePassed, setTimePassed] = useState(0);
	const [deadline, setDeadline] = useState(
		Date.now() + (1000 * 60 * pairTime) / 2,
	);
	const totalTime = Math.floor(-(Date.now() - deadline) / 1000); //num of seconds
	const secondsRemaining = (deadline - Date.now()) / 1000;

	const timeRef = useRef(null);
	const numRef = useRef(null);

	return (
		<Card style={cardStyle}>
			<Button onClick={() => timeRef.current.stopTimer()}>Stop</Button>
			<Button onClick={() => timeRef.current.startTimer()}>Start</Button>
			<Button onClick={() => console.log(timeRef.current)}>???</Button>
			<PageTitle
				currentRound={currentRound}
				people={people}
				isEven={isEven}
				instruction="🔥 Round in Progress"
				continueText="Next Pairing"
			>
				<Row type="flex" justify="space-around" style={{ margin: '30px 0px' }}>
					<Progress
						type="circle"
						percent={secondsRemaining}
						format={percent => (
							<Countdown ref={timeRef} value={deadline} format="mm:ss" />
						)}
					/>
					<Progress type="circle" percent={100} />
				</Row>
			</PageTitle>
		</Card>
	);
};
export default Round;
