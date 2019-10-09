import React, { useState, useEffect, useRef } from 'react';
import { Statistic, Progress, Row, Typography, Button } from 'antd';
import { secondCounterPlaceholder, allRadius } from './Constants';
import Stars from './Stars';
import NextButton from './NextButton';

const { Countdown } = Statistic;
const { Title, Text } = Typography;

const Round = ({ pairTime, isLastRound, setActive, nextRound, people }) => {
	const roundTime = () => Date.now() + (1000 * 60 * pairTime) / 2;
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
		margin: 'auto',
		width: '100%',
	};

	const colors = {
		First: { color: '#80aaff' },
		Second: { color: '#ff8533' },
	};

	const getSecondPercent = () => {
		if (firstActive) return 0;
		else if (!firstActive && !timeRunning) return 100;
		else return secondPercent;
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

	console.log(deadline);

	return (
		<>
			<Row style={{ height: '10%', textAlign: 'center' }}>
				{isLastRound && !timeRunning ? (
					<Text>✅ Session Complete</Text>
				) : (
					<Text>🔥 Round in Progress</Text>
				)}
			</Row>
			<Row
				type="flex"
				justify="space-around"
				style={{ margin: 'auto', width: '100%' }}
			>
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
					percent={getSecondPercent()}
					format={
						percent => (
							// firstActive ? (
							// 	secondCounterPlaceholder[pairTime]
							// ) : (
							<Countdown
								value={firstActive ? Date.now() : deadline}
								format="mm:ss"
								onFinish={() => setTimeRunning(false)}
							/>
						)
						// )
					}
				/>
			</Row>
			{getMessage()}
			{isLastRound && !timeRunning && (
				<Stars setActive={setActive} pairTime={pairTime} people={people} />
			)}
			{isLastRound && timeRunning && (
				<Button
					size="large"
					type="primary"
					onClick={() => {
						setTimeRunning(false);
						setDeadline(Date.now());
					}}
					style={{
						borderRadius: allRadius,
						height: 50,
					}}
					block
				>
					End Session
				</Button>
			)}
			{!isLastRound && (
				<NextButton
					active="Round"
					setActive={setActive}
					nextRound={nextRound}
				/>
			)}
		</>
	);
};
export default Round;
