import React, { useState, useEffect, useRef } from 'react';
import { Statistic, Progress, Row, Typography, Rate, Card } from 'antd';
import { secondCounterPlaceholder } from './Constants';

const { Countdown } = Statistic;
const { Title, Text } = Typography;

const Round = ({ pairTime, currentRound, numOfRounds }) => {
	const roundTime = () => Date.now() + (1000 * 60 * pairTime) / 2;
	const isLastRound = currentRound === numOfRounds();

	const [count, setCount] = useState(0);
	const [deadline, setDeadline] = useState(roundTime());
	const [firstActive, setFirstActive] = useState(true);
	const [timeRunning, setTimeRunning] = useState(true);

	const totalMilSeconds = (pairTime / 2) * 600;
	const percent = (count / totalMilSeconds) * 100;
	const secondPercent =
		((count - totalMilSeconds) / (totalMilSeconds / 10)) * 10;

	function useInterval(callback) {
		const savedCallback = useRef();
		useEffect(() => {
			savedCallback.current = callback;
		}, [callback]);
		useEffect(() => {
			function tick() {
				savedCallback.current();
			}
			let id = setInterval(tick, 100);
			return () => clearInterval(id);
		}, [deadline]);
	}

	useInterval(() => {
		setCount(count + 1);
	});

	const titleStyle = {
		fontWeight: 400,
		textAlign: 'center',
		marginTop: 80,
	};

	const colors = {
		First: { color: '#80aaff' },
		Second: { color: '#ff8533' },
	};

	const getMessage = () => {
		if (timeRunning) {
			const prefix = firstActive ? 'First' : 'Second';
			return (
				<Title level={4} style={titleStyle}>
					<span style={colors[prefix]}>{prefix}</span> person talking
				</Title>
			);
		} else
			return (
				<Title level={4} style={titleStyle}>
					{isLastRound ? 'Game' : 'Round'} over!
				</Title>
			);
	};

	return (
		<>
			<Row type="flex" justify="space-around" style={{ margin: '50px 0px' }}>
				<Progress
					type="circle"
					strokeColor="#80aaff"
					percent={firstActive ? percent : 100}
					format={percent => (
						<Countdown
							value={firstActive ? deadline : Date.now()}
							format="mm:ss"
							onFinish={() => {
								setFirstActive(false);
								setDeadline(roundTime());
							}}
						/>
					)}
				/>
				<Progress
					type="circle"
					strokeColor="#ff8533"
					percent={firstActive ? 0 : secondPercent}
					format={percent =>
						firstActive ? (
							secondCounterPlaceholder[pairTime]
						) : (
							<Countdown
								value={firstActive ? Date.now() : deadline}
								format="mm:ss"
								onFinish={() => setTimeRunning(false)}
							/>
						)
					}
				/>
			</Row>
			{getMessage()}
			{isLastRound && !timeRunning && (
				<Card bodyStyle={{ textAlign: 'center' }}>
					<Text strong>Rate this session</Text>
					<Rate style={{ width: '100%' }} />
				</Card>
			)}
		</>
	);
};
export default Round;
